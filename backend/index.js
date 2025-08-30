const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: "./.env" });
}

// Add debugging
console.log('=== Environment Variables Check ===');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('GMAIL_USER:', process.env.GMAIL_USER ? 'Set' : 'Not Set');
console.log('GMAIL_APP_PASSWORD:', process.env.GMAIL_APP_PASSWORD ? 'Set' : 'Not Set');
console.log('======================================');

const app = express();
app.use(cors());
app.use(express.json());


// Create transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD  // Your Gmail App Password
    }
});

// Test the connection
transporter.verify((error, success) => {
    if (error) {
        console.error('SMTP connection error:', error);
    } else {
        console.log('SMTP server is ready to send emails');
    }
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
    const { name, email, company, service, budget, message } = req.body;

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: 'support@ssssmarttech.com',
        // to: 'personalforchatgpt@gmail.com',
        subject: `🔔 New Contact Inquiry from ${name} | SSS Smart Tech`,
        html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form Submission</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f7fa;">
        <div style="max-width: 650px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            
            <!-- Header Section -->
            <div style="background: linear-gradient(135deg, #322679 0%, #0A8836 100%); padding: 40px 30px; text-align: center; position: relative;">
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg></div>
                <div style="position: relative; z-index: 2;">
                    <div style="background: rgba(254, 187, 0, 0.2); display: inline-block; padding: 12px 24px; border-radius: 50px; margin-bottom: 15px;">
                        <span style="color: #FEBB00; font-size: 24px;">✉️</span>
                    </div>
                    <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                        New Contact Inquiry
                    </h1>
                    <p style="color: #FEBB00; margin: 8px 0 0 0; font-size: 16px; font-weight: 500;">
                        SSS Smart Tech Website
                    </p>
                </div>
            </div>

            <!-- Priority Banner -->
            <div style="background: #FEBB00; text-align: center; padding: 8px;">
                <span style="color: #322679; font-weight: bold; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">
                    ⚡ Priority Lead - Respond within 2 hours
                </span>
            </div>

            <!-- Main Content -->
            <div style="padding: 40px 30px;">
                
                <!-- Contact Information Card -->
                <div style="background: linear-gradient(135deg, #f8f9ff 0%, #f0f8ff 100%); border-radius: 16px; padding: 30px; margin-bottom: 30px; border: 1px solid #e6f2ff;">
                    <div style="display: flex; align-items: center; margin-bottom: 20px;">
                        <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #322679, #0A8836); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                            <span style="color: white; font-size: 18px;">👤</span>
                        </div>
                        <h2 style="color: #322679; margin: 0; font-size: 22px; font-weight: 600;">Contact Information</h2>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                        <div style="background: white; padding: 20px; border-radius: 12px; border-left: 4px solid #322679;">
                            <div style="font-size: 12px; color: #666; text-transform: uppercase; font-weight: 600; margin-bottom: 5px;">Full Name</div>
                            <div style="font-size: 18px; color: #322679; font-weight: 600;">${name}</div>
                        </div>
                        
                        <div style="background: white; padding: 20px; border-radius: 12px; border-left: 4px solid #0A8836;">
                            <div style="font-size: 12px; color: #666; text-transform: uppercase; font-weight: 600; margin-bottom: 5px;">Email Address</div>
                            <div style="font-size: 16px;">
                                <a href="mailto:${email}" style="color: #0A8836; text-decoration: none; font-weight: 500;">${email}</a>
                            </div>
                        </div>
                        
                        <div style="background: white; padding: 20px; border-radius: 12px; border-left: 4px solid #FEBB00;">
                            <div style="font-size: 12px; color: #666; text-transform: uppercase; font-weight: 600; margin-bottom: 5px;">Company</div>
                            <div style="font-size: 16px; color: #333; font-weight: 500;">${company || '<em style="color: #999;">Not provided</em>'}</div>
                        </div>
                        
                        <div style="background: white; padding: 20px; border-radius: 12px; border-left: 4px solid #322679;">
                            <div style="font-size: 12px; color: #666; text-transform: uppercase; font-weight: 600; margin-bottom: 5px;">Submission Time</div>
                            <div style="font-size: 14px; color: #666;">${new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            dateStyle: 'medium',
            timeStyle: 'short'
        })}</div>
                        </div>
                    </div>
                </div>

                <!-- Project Details Card -->
                <div style="background: linear-gradient(135deg, #f0fff4 0%, #f8fff8 100%); border-radius: 16px; padding: 30px; margin-bottom: 30px; border: 1px solid #e6ffe6;">
                    <div style="display: flex; align-items: center; margin-bottom: 20px;">
                        <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #0A8836, #322679); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                            <span style="color: white; font-size: 18px;">💼</span>
                        </div>
                        <h2 style="color: #0A8836; margin: 0; font-size: 22px; font-weight: 600;">Project Details</h2>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                        <div style="background: white; padding: 20px; border-radius: 12px;">
                            <div style="font-size: 12px; color: #666; text-transform: uppercase; font-weight: 600; margin-bottom: 10px;">Service Interested In</div>
                            <div style="display: inline-block; background: linear-gradient(135deg, #322679, #0A8836); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 600;">
                                ${service || 'Not specified'}
                            </div>
                        </div>
                        
                        <div style="background: white; padding: 20px; border-radius: 12px;">
                            <div style="font-size: 12px; color: #666; text-transform: uppercase; font-weight: 600; margin-bottom: 10px;">Project Budget</div>
                            <div style="font-size: 16px; color: #333; font-weight: 600;">
                                ${budget || '<em style="color: #999;">Budget not specified</em>'}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Message Card -->
                <div style="background: linear-gradient(135deg, #fffbf0 0%, #fffff8 100%); border-radius: 16px; padding: 30px; margin-bottom: 30px; border: 1px solid #fff4e6;">
                    <div style="display: flex; align-items: center; margin-bottom: 20px;">
                        <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #FEBB00, #322679); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                            <span style="color: white; font-size: 18px;">💬</span>
                        </div>
                        <h2 style="color: #FEBB00; margin: 0; font-size: 22px; font-weight: 600;">Client Message</h2>
                    </div>
                    
                    <div style="background: white; padding: 25px; border-radius: 12px; border-left: 4px solid #FEBB00; position: relative;">
                        <div style="position: absolute; top: -8px; left: 20px; background: white; padding: 0 10px; font-size: 12px; color: #666; text-transform: uppercase; font-weight: 600;">Message Content</div>
                        <p style="margin: 10px 0 0 0; line-height: 1.8; color: #333; font-size: 16px; white-space: pre-wrap;">${message}</p>
                    </div>
                </div>

                <!-- Quick Action Buttons -->
                <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 16px; margin-bottom: 20px;">
                    <h3 style="color: #322679; margin: 0 0 20px 0; font-size: 20px; font-weight: 600;">Quick Response Actions</h3>
                    <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                        <a href="mailto:${email}?subject=Re: Your inquiry about ${service || 'our services'}&body=Dear ${name},%0D%0A%0D%0AThank you for your interest in SSS Smart Tech. We have received your inquiry and would like to discuss your requirements further.%0D%0A%0D%0ABest regards,%0D%0ASSS Smart Tech Team" 
                           style="background: linear-gradient(135deg, #322679, #0A8836); color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; display: inline-flex; align-items: center; box-shadow: 0 4px 12px rgba(50, 38, 121, 0.3); transition: all 0.3s ease;">
                            📧 Reply to Client
                        </a>
                        
                        <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Follow-up with ${name}&details=Client inquiry about: ${service || 'services'}%0AEmail: ${email}%0ACompany: ${company || 'N/A'}" 
                           style="background: linear-gradient(135deg, #0A8836, #FEBB00); color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; display: inline-flex; align-items: center; box-shadow: 0 4px 12px rgba(10, 136, 54, 0.3);">
                            📅 Schedule Follow-up
                        </a>
                        
                        <a href="tel:${email.replace('@', '').replace('.', '')}" 
                           style="background: linear-gradient(135deg, #FEBB00, #322679); color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; display: inline-flex; align-items: center; box-shadow: 0 4px 12px rgba(254, 187, 0, 0.3);">
                            📞 Call Client
                        </a>
                    </div>
                </div>

                <!-- Footer Info -->
                <div style="text-align: center; padding-top: 20px; border-top: 2px solid #f0f0f0;">
                    <p style="margin: 0; color: #666; font-size: 14px; line-height: 1.6;">
                        <strong>⏰ Response SLA:</strong> Please respond within 2 hours during business hours<br>
                        <strong>📊 Lead Priority:</strong> High (Contact form submission)<br>
                        <strong>🔍 Source:</strong> SSS Smart Tech Website Contact Form
                    </p>
                </div>
            </div>

            <!-- Company Footer -->
            <div style="background: #322679; color: white; text-align: center; padding: 30px;">
                <div style="margin-bottom: 15px;">
                    <h3 style="margin: 0; font-size: 24px; font-weight: 600; background: linear-gradient(45deg, #FEBB00, #ffffff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                        SSS Smart Tech
                    </h3>
                    <p style="margin: 5px 0 0 0; color: #FEBB00; font-size: 14px; font-weight: 500;">
                        Transforming businesses through innovation
                    </p>
                </div>
                
                <div style="font-size: 13px; color: #ffffff; opacity: 0.9; line-height: 1.5;">
                    📍 Karunai Sekaran Nagar 1st ST, Dr. Ambedkar Main Road, Nanmangalam<br>
                    Chennai – 600 117, Tamil Nadu, India<br>
                    📞 044-4613 7620 | 📧 support@ssssmarttech.com<br>
                    🌐 <a href="https://ssssmarttech.com" style="color: #FEBB00; text-decoration: none;">www.ssssmarttech.com</a>
                </div>
            </div>
        </div>
    </body>
    </html>
  `,
        replyTo: email
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.messageId);
        res.status(200).json({
            success: true,
            message: 'Email sent successfully to support@ssssmarttech.com',
            messageId: info.messageId
        });
    } catch (error) {
        console.error('Email sending failed:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send email',
            error: error.message
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running' });
});


// ---------- Serve React Frontend ----------
// Serve static files
const frontendPath = path.join(__dirname, 'frontend', 'build');
app.use(express.static(frontendPath));

// Catch-all for React Router (LAST)
app.get('/*catchall', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});