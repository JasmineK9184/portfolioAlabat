# Email Integration Setup Guide

Your portfolio now has email integration using **EmailJS**! Here's how to set it up:

## Step 1: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Create New Service**
3. Select **Gmail** as the service
4. Click **Connect Account** and authorize EmailJS to send emails from your Gmail account (Jasminealabat7@gmail.com)
5. Give your service a name (e.g., "Gmail") and copy the **Service ID**
6. Click **Create Service**

## Step 3: Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Set up your template as follows:
   - **Template Name**: Portfolio Contact Form
   - **Subject**: New Message from {{from_name}}
   - **Content**: Use the template below:

```
You have received a new message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from Portfolio Website
```

4. Copy the **Template ID** after creating it

## Step 4: Get Your Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key**

## Step 5: Update Environment Variables

Open `.env.local` in your portfolio project and update it with your credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace:
- `your_service_id_here` with your Service ID from Step 2
- `your_template_id_here` with your Template ID from Step 3
- `your_public_key_here` with your Public Key from Step 4

## Step 6: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Contact section of your portfolio

3. Fill out the contact form and click "Send Message"

4. You should receive an email at Jasminealabat7@gmail.com with the message details!

## Important Notes

- ⚠️ **Never commit `.env.local` to version control!** It's already in your `.gitignore`
- The free tier of EmailJS allows 200 emails per month
- For production, you may need to upgrade your plan if you expect higher volume
- Keep your API keys secure and rotate them if they're ever exposed

## Troubleshooting

**Issue**: "Failed to send message" error appears
- **Solution**: Verify all credentials in `.env.local` are correct
- Check the browser console for specific error messages

**Issue**: Email not arriving in Gmail
- Check spam/promotions folder
- Verify the Gmail address in the contact form is correct
- Make sure Gmail is authorized in your EmailJS service settings

**Issue**: 403 error or authentication failure
- Verify your Public Key is correct
- Make sure the Service ID and Template ID match what's in EmailJS dashboard
- Check that Gmail is properly connected in EmailJS Email Services

For more help, visit [EmailJS Documentation](https://www.emailjs.com/docs/)
