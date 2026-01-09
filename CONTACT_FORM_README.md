# QofenoLabs Contact Form - Quick Start

## ✅ What's Already Done

- ✓ EmailJS library installed (@emailjs/browser)
- ✓ Contact form component created with full functionality
- ✓ Form validation and error handling
- ✓ Success/error messages
- ✓ Loading states
- ✓ Email will be sent to: **qofenolabs@gmail.com**

## 🚀 To Make It Work (5 minutes)

### 1. Create EmailJS Account
Visit [EmailJS.com](https://www.emailjs.com/) and sign up

### 2. Get Your Credentials
- Add Gmail service with qofenolabs@gmail.com
- Create email template
- Copy Service ID, Template ID, and Public Key

### 3. Update Environment Variables
Edit `.env.local` file and replace:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### 4. Restart Dev Server
```bash
npm run dev
```

### 5. Test!
Go to http://localhost:3000 → scroll to contact form → submit

## 📖 Full Instructions
See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for detailed step-by-step guide

## 💡 Alternative Services
If EmailJS doesn't work for you:
- **Resend.com** - Modern, free tier, great docs
- **SendGrid** - Reliable, more complex setup
- **Formspree** - Simple form backend

## Features Included
- Real-time validation
- Loading spinner during submission
- Success confirmation message
- Error handling with helpful messages
- Automatic form reset after success
- Mobile-responsive design
