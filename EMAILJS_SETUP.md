# EmailJS Setup Instructions for QofenoLabs Contact Form

Your contact form is now integrated with EmailJS! Follow these steps to complete the setup:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. Once logged in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose **Gmail** (recommended since you're using qofenolabs@gmail.com)
4. Click **Connect Account** and authorize with qofenolabs@gmail.com
5. Copy the **Service ID** (it will look like: `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Set **Template Name**: Contact Form
4. Replace the template content with:

```
New Contact Form Submission from QofenoLabs

From: {{from_name}}
Email: {{from_email}}
Plan Interest: {{plan}}

Message:
{{message}}

---
This email was sent from your QofenoLabs website contact form.
```

5. In the **To Email** field, enter: `qofenolabs@gmail.com`
6. Subject line: `New Contact: {{from_name}} - {{plan}}`
7. Click **Save**
8. Copy the **Template ID** (it will look like: `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (it will look like a random string)
3. Copy this key

## Step 5: Update Your Code

Open the file: `app/components/ContactForm.tsx`

Find these lines (around line 17-19):

```typescript
const serviceId = 'service_qofeno'; // You'll need to create this in EmailJS
const templateId = 'template_contact'; // You'll need to create this in EmailJS
const publicKey = 'YOUR_PUBLIC_KEY'; // You'll need to add this from EmailJS
```

Replace them with:

```typescript
const serviceId = 'YOUR_SERVICE_ID'; // Paste Service ID from Step 2
const templateId = 'YOUR_TEMPLATE_ID'; // Paste Template ID from Step 3
const publicKey = 'YOUR_PUBLIC_KEY'; // Paste Public Key from Step 4
```

## Step 6: Test the Form

1. Save the file
2. Go to your website (http://localhost:3000)
3. Scroll to the contact form
4. Fill it out and submit
5. Check qofenolabs@gmail.com for the email

## Important Notes

- **Free Plan Limits**: EmailJS free plan includes 200 emails/month
- **Security**: The public key is safe to expose in frontend code
- **Spam Protection**: Consider adding reCAPTCHA if you get spam submissions
- **Alternative**: If EmailJS doesn't work, you can use:
  - Resend.com (also free tier)
  - SendGrid
  - Nodemailer with an API route

## Troubleshooting

**Email not received?**
- Check spam folder
- Verify Service ID, Template ID, and Public Key are correct
- Check EmailJS dashboard for error logs
- Verify qofenolabs@gmail.com is correctly set in the template

**Form showing error?**
- Open browser console (F12) to see error details
- Make sure you've enabled the service in EmailJS dashboard
- Verify your Gmail account is properly connected

## Contact Form Features

✓ Real-time form validation
✓ Loading state while sending
✓ Success/error messages
✓ Form reset after successful submission
✓ Email sent to: qofenolabs@gmail.com

Need help? Check the EmailJS documentation: https://www.emailjs.com/docs/
