SmartInk is a full-stack, AI-driven blogging platform designed to help users create, manage, and publish blogs efficiently. It combines a modern frontend, a secure backend, and an AI assistant powered by the Gemini API.

🔹 What SmartInk Does

SmartInk allows users to:

✅ Write blogs manually OR generate content using AI

Users can type their own blog content or ask the AI to write sections, summaries, intros, conclusions, or even full blogs based on a prompt.

✅ Create, Update, Delete, and Manage blog posts

You built a complete CRUD system:

Create blogs

Edit existing blogs

Delete unwanted blogs

View blog lists and details

All stored and served securely through MongoDB.

✅ Authenticate & manage users securely

You used Clerk, which provides:

Sign-up / login

Secure session management

Role-based access

Admin privileges

Admins can manage blogs of all users, while normal users manage only their own posts.

✅ Modern, responsive UI

Using React + Tailwind CSS:

Fully responsive

Smooth and clean design

Faster navigation and rendering

🔹 Core Technologies You Used
Frontend:

React.js

Tailwind CSS

Clerk (Auth UI components)

Backend / Database:

MongoDB

REST APIs (Node/Express not needed due to Clerk + client-heavy design, but can be added)

AI:

Google Gemini API for blog content generation

Deployment:

Fully deployed on Vercel

⭐ Technical Highlights (Impressive Points You Can Tell Interviewer)
1. AI Content Generation Workflow

You integrated Gemini API to generate:

Topic-based articles

SEO-friendly titles

Full blog drafts

Idea suggestions

You handled:

Prompt engineering

Response cleaning

Frontend integration to show AI text in real time

2. Secure Role-Based System

Using Clerk:

Users → Create/manage their own blogs

Admins → Manage ALL blogs

JWT-based session protection

This shows you understand session management and RBAC (Role Based Access Control).

3. Optimized, scalable blog storage

Using MongoDB:

Each blog stored as a document

Indexed fields for faster retrieval

Proper schema design for user-blog relationship

4. Clean, modern UI with fast interactions

Tailwind + React ensured:

No reload navigation

Instant rendering

Mobile-friendly design
for testing the project and admin panel
admin username:admin@example.com
admin password:greatstack
