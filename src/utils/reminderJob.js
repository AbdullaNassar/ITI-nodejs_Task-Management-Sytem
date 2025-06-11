const cron = require("node-cron");
const nodemailer = require("nodemailer");
const Task = require("../models/taskModel");

const cronReminder = () => {
  try {
    const now = new Date();

    // run reminder job every minute
    cron.schedule("* * * * * ", async () => {
      const tasks = await Task.find({
        reminder: { $lt: now, $ne: null },
        status: { $ne: "completed" },
      });
      console.log(tasks);
      tasks.forEach(async (task) => {
        await sendReminderEmail(task);
        task.reminder = null;
        await task.save();
      });
    });
  } catch (err) {
    console.log(err);
  }
};

async function sendReminderEmail(task) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });
    // 2) Define the email options
    const mailOptions = {
      from: "Task Master App",
      to: task.userID.email,
      subject: `Reminder ${task.title}`,
      text: `Your task ${task.title} is due on ${task.dueDate}`,
    };

    // 3) Actually send the email
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  cronReminder,
};
