import React, { useEffect, useState } from "react";
const fakeNotifications = [
  { name: "Amrita Thampi", time: "1 min ago", location: "Guwahati, Assam" },
  { name: "Rohit Sharma", time: "2 mins ago", location: "Mumbai, Maharashtra" },
  { name: "Sneha Verma", time: "5 mins ago", location: "Bengaluru, Karnataka" },
  { name: "Arjun Kapoor", time: "30 secs ago", location: "Delhi" },
  { name: "Neha Mehta", time: "3 mins ago", location: "Kolkata, West Bengal" },
  { name: "Vikram Singh", time: "4 mins ago", location: "Jaipur, Rajasthan" },
  { name: "Priya Nair", time: "6 mins ago", location: "Chennai, Tamil Nadu" },
  { name: "Kabir Khan", time: "7 mins ago", location: "Hyderabad, Telangana" },
  { name: "Aditi Patil", time: "9 mins ago", location: "Pune, Maharashtra" },
  {
    name: "Rajesh Gupta",
    time: "10 mins ago",
    location: "Lucknow, Uttar Pradesh",
  },
  { name: "Meera Das", time: "12 mins ago", location: "Bhubaneswar, Odisha" },
  { name: "Sandeep Yadav", time: "15 mins ago", location: "Patna, Bihar" },
  {
    name: "Ananya Bose",
    time: "17 mins ago",
    location: "Kolkata, West Bengal",
  },
  {
    name: "Nikhil Choudhary",
    time: "19 mins ago",
    location: "Ahmedabad, Gujarat",
  },
  { name: "Tanya Joshi", time: "21 mins ago", location: "Surat, Gujarat" },
  {
    name: "Gaurav Malhotra",
    time: "23 mins ago",
    location: "Indore, Madhya Pradesh",
  },
  {
    name: "Sonia Kapoor",
    time: "24 mins ago",
    location: "Nagpur, Maharashtra",
  },
  {
    name: "Ishaan Roy",
    time: "25 mins ago",
    location: "Bhopal, Madhya Pradesh",
  },
  { name: "Ritika Shah", time: "26 mins ago", location: "Chandigarh" },
  {
    name: "Harsh Tiwari",
    time: "27 mins ago",
    location: "Noida, Uttar Pradesh",
  },
  { name: "Kunal Desai", time: "28 mins ago", location: "Vadodara, Gujarat" },
  {
    name: "Deepika Reddy",
    time: "29 mins ago",
    location: "Visakhapatnam, Andhra Pradesh",
  },
  {
    name: "Vikas Mishra",
    time: "30 mins ago",
    location: "Agra, Uttar Pradesh",
  },
  {
    name: "Sanya Khurana",
    time: "31 mins ago",
    location: "Meerut, Uttar Pradesh",
  },
  {
    name: "Aditya Verma",
    time: "32 mins ago",
    location: "Kanpur, Uttar Pradesh",
  },
  { name: "Reema Saxena", time: "33 mins ago", location: "Jodhpur, Rajasthan" },
  {
    name: "Manoj Pillai",
    time: "34 mins ago",
    location: "Thiruvananthapuram, Kerala",
  },
  { name: "Divya Aggarwal", time: "35 mins ago", location: "Amritsar, Punjab" },
  { name: "Tarun Chawla", time: "36 mins ago", location: "Ludhiana, Punjab" },
  { name: "Bhavna Menon", time: "37 mins ago", location: "Kochi, Kerala" },
  { name: "Aryan Bhatia", time: "38 mins ago", location: "Mysuru, Karnataka" },
  {
    name: "Saurabh Nanda",
    time: "39 mins ago",
    location: "Gandhinagar, Gujarat",
  },
  {
    name: "Pooja D'Souza",
    time: "40 mins ago",
    location: "Mangalore, Karnataka",
  },
  { name: "Ashok Sen", time: "41 mins ago", location: "Ranchi, Jharkhand" },
  { name: "Juhi Jain", time: "42 mins ago", location: "Dehradun, Uttarakhand" },
  {
    name: "Shivani Rao",
    time: "43 mins ago",
    location: "Shimla, Himachal Pradesh",
  },
  {
    name: "Rohan Mukherjee",
    time: "44 mins ago",
    location: "Siliguri, West Bengal",
  },
  {
    name: "Farhan Sheikh",
    time: "45 mins ago",
    location: "Jamshedpur, Jharkhand",
  },
  { name: "Zoya Khan", time: "46 mins ago", location: "Dhanbad, Jharkhand" },
  {
    name: "Chetan Salunke",
    time: "47 mins ago",
    location: "Kolhapur, Maharashtra",
  },
  { name: "Esha Mathew", time: "48 mins ago", location: "Thrissur, Kerala" },
  { name: "Mohit Saxena", time: "49 mins ago", location: "Udaipur, Rajasthan" },
  {
    name: "Anirudh Iyer",
    time: "50 mins ago",
    location: "Raipur, Chhattisgarh",
  },
  { name: "Varun Arora", time: "51 mins ago", location: "Bokaro, Jharkhand" },
  { name: "Snehal Naik", time: "52 mins ago", location: "Nashik, Maharashtra" },
  {
    name: "Siddharth Kaul",
    time: "53 mins ago",
    location: "Jabalpur, Madhya Pradesh",
  },
  {
    name: "Preeti Grover",
    time: "54 mins ago",
    location: "Dharwad, Karnataka",
  },
  { name: "Ramesh Swamy", time: "55 mins ago", location: "Belgaum, Karnataka" },
  { name: "Sunita Puri", time: "56 mins ago", location: "Cuttack, Odisha" },
  { name: "Vivek Oberoi", time: "57 mins ago", location: "Ajmer, Rajasthan" },
];

function AppleNotification() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const addNotification = () => {
      const randomNotification =
        fakeNotifications[Math.floor(Math.random() * fakeNotifications.length)];

      setNotifications((prev) => [...prev, randomNotification]);

      // Remove the first notification after 5 seconds
      setTimeout(() => {
        setNotifications((prev) => prev.slice(1));
      }, 5000);
    };

    // Add a new notification every 3 seconds
    const interval = setInterval(addNotification, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="notification-container">
      {notifications.map((notification, index) => (
        <div key={index} className="notification-box">
          {/* Green Circle with Tick Icon */}
          <div className="tick-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="black"
              className="tick-svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Notification Text */}
          <div className="notification-text">
            <strong>{notification.name}</strong> registered {notification.time}
            <br />
            <span className="notification-location">
              {notification.location}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AppleNotification;
