'use client'

import { useEffect, useState } from 'react'
import { 
  Rocket,
  Smartphone,
  Monitor,
  Bot,
  Zap,
  Palette,
  Cloud,
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

// Animated Background Component
const AnimatedBackground = () => (
  <div className="bg-animation">
    <div className="background-grid"></div>
    <div className="background-lines">
      <div className="background-line"></div>
      <div className="background-line"></div>
      <div className="background-line"></div>
      <div className="background-line"></div>
    </div>
    
    <div className="floating-shape shape-1"></div>
    <div className="floating-shape shape-2"></div>
    <div className="floating-shape shape-3"></div>
    <div className="floating-shape shape-4"></div>
    <div className="floating-shape shape-5"></div>
    <div className="floating-shape shape-6"></div>
    <div className="floating-shape shape-7"></div>
    <div className="floating-shape shape-8"></div>
    
    <div className="gradient-orb orb-1"></div>
    <div className="gradient-orb orb-2"></div>
    <div className="gradient-orb orb-3"></div>
    
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
  </div>
)

// Hero Section
const HeroSection = () => (
  <section className="hero">
    <div className="container">
      <div className="hero-content">
        <div className="relaunch-offer">
          <span className="offer-badge">🔥 Relaunch Offer - Only 4 MVP spots at $3900</span>
        </div>
        <h1>Launch your <span className="highlight">SaaS dream</span> in just 15 days</h1>
        <p>From idea to MVP, we build fast, scalable and smart products so you can focus on growth</p>
        <div className="hero-buttons">
          <a href="#contact" className="cta-button">Claim Your Spot</a>
        </div>
      </div>
    </div>
  </section>
)

// What We Offer Section
const WhatWeOfferSection = () => (
  <section className="what-we-offer" id="packages">
    <div className="container">
      <div className="section-header fade-in">
        <h2>💼 What We Offer</h2>
        <p>Two Powerful Packages Tailored for Founders Who Want to Move Fast</p>
      </div>
      
      <div className="packages-grid">
        {/* MVP Package */}
        <div className="package-card fade-in">
          <div className="package-header">
            <div className="package-badge">🔹 MVP in 15 Days</div>
            <div className="package-price">$3,900</div>
          </div>
          <p className="package-description">
            Perfect for early-stage founders who want to validate their idea quickly with a working product.
          </p>
          
          <div className="package-features">
            <h4>What's included:</h4>
            <ul>
              <li>✅ Strategy call to scope your idea and define core flows</li>
              <li>✅ Clean, responsive UI using Tailwind or Ant Design</li>
              <li>✅ Core features (auth, dashboard, 1–2 main modules)</li>
              <li>✅ 1 AI feature (e.g. chatbot, summarizer, content generator using OpenAI or Gemini)</li>
              <li>✅ Full-stack development (React/Next.js + Node.js + MongoDB/PostgreSQL)</li>
              <li>✅ Deployed live on your domain via Vercel, Render, or custom setup</li>
              <li>✅ Basic admin panel or analytics (optional)</li>
              <li>✅ Walkthrough + post-delivery support (7 days)</li>
            </ul>
          </div>
          
          <div className="package-details">
            <div className="detail-item">
              <span className="detail-label">Timeline:</span>
              <span className="detail-value">🚀 Delivered in just 15 days</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Best for:</span>
              <span className="detail-value">MVPs, idea validation, pitch decks, early demos</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Fixed Price:</span>
              <span className="detail-value">$3,900</span>
            </div>
          </div>
          
          <div className="package-quote">
            "We build fast so you can learn fast — your MVP, live and usable in just 15 days."
          </div>
        </div>

        {/* Full Product Package */}
        <div className="package-card fade-in featured">
          <div className="package-header">
            <div className="package-badge">🔹 Full Product Build</div>
            <div className="package-price">Custom Pricing</div>
          </div>
          <p className="package-description">
            For funded founders or startups ready to scale with a full-featured SaaS platform.
          </p>
          
          <div className="package-features">
            <h4>What's included:</h4>
            <ul>
              <li>✅ In-depth product discovery, planning & architecture</li>
              <li>✅ Custom Figma UI/UX design tailored to your brand</li>
              <li>✅ Full development with modular, scalable backend</li>
              <li>✅ Multiple AI use-cases (prompt engineering, fine-tuning, multi-step workflows)</li>
              <li>✅ Third-party integrations (Stripe, Zapier, Google APIs, etc.)</li>
              <li>✅ Role-based access, real-time features (if needed), settings, notifications</li>
              <li>✅ Admin panel, analytics, usage logs, and dashboards</li>
              <li>✅ Production-ready deployment (AWS, Vercel, GCP, etc.)</li>
              <li>✅ Documentation + handoff support for your internal team</li>
              <li>✅ Ongoing support & iteration (optional)</li>
            </ul>
          </div>
          
          <div className="package-details">
            <div className="detail-item">
              <span className="detail-label">Timeline:</span>
              <span className="detail-value">Typically 4–8 weeks, based on scope</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Pricing:</span>
              <span className="detail-value">Starts at $7,500 — custom quote provided after discovery</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Best for:</span>
              <span className="detail-value">Funded startups, growth-stage founders, AI-powered platforms</span>
            </div>
          </div>
          
          <div className="package-quote">
            "We don't just build features. We build the entire foundation of your startup."
          </div>
        </div>
      </div>
    </div>
  </section>
)

// How It Works Section
const HowItWorksSection = () => (
  <section className="how-it-works" id="process">
    <div className="container">
      <div className="section-header fade-in">
        <h2>⚙️ How It Works</h2>
        <p>A simple, fast, and founder-friendly process built for speed, clarity, and results.</p>
      </div>
      
      <div className="steps-grid">
        <div className="step-card fade-in">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>🔹 Book a Call & Share Your Idea</h3>
            <p>30–45 minute discovery call to understand your vision, define features, and align on scope.</p>
            <div className="step-quote">Clarity before code — no guesswork.</div>
          </div>
        </div>

        <div className="step-card fade-in">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>🔹 Design & Build the Core</h3>
            <p>Clean UI design and core development: auth, dashboard, and main features.</p>
            <div className="step-quote">Every line of code is written to ship fast and scale later.</div>
          </div>
        </div>

        <div className="step-card fade-in">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>🔹 Integrate AI (If Needed)</h3>
            <p>Smart AI features using OpenAI, Gemini, or custom APIs for chatbots, content, and automation.</p>
            <div className="step-quote">You get real, working AI functionality — not just a buzzword.</div>
          </div>
        </div>

        <div className="step-card fade-in">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>🔹 Launch & Go Live 🚀</h3>
            <p>Production deployment with custom domain, walkthrough, and post-launch support.</p>
            <div className="step-quote">Your MVP is live and ready to impress users, investors, or early customers.</div>
          </div>
        </div>
      </div>

      <div className="timeline-highlight fade-in">
        <div className="highlight-content">
          <h3>✨ Time to Launch: Just 15 Days (for MVP)</h3>
          <p>From first call to final push, we keep things tight, collaborative, and laser-focused on delivering real value — fast.</p>
        </div>
      </div>
    </div>
  </section>
)

// Real Work / Demo Projects Section
const DemoProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "HelpXpert",
      description: "Turn Your Manuals into AI Support Agents. Stop overwhelming your customers with PDFs or paper manuals. Let them talk to your product and get instant, helpful answers anytime.",
      image: "🤖",
      imageUrl: "/HelpXpert.png"
    },
          {
        id: 2,
        title: "WebMeter",
        description: "Turn Clicks into Customers. WebMeter helps SaaS founders track user journeys, build funnels, and grow revenue, without drowning in dashboards.",
        image: "📈",
        imageUrl: "/WebMeter.png"
      },
      {
        id: 3,
        title: "ApiVault",
        description: "Secure, Rotate, and Access Your API Keys Effortlessly. Centralized key vault for developers to securely store, auto-rotate, and access secrets via SDK. No more plaintext configs or expired API tokens.",
        image: "🔐",
        imageUrl: "/ApiVault.png"
      },
      {
        id: 4,
        title: "Challenge App",
        description: "Submit tasks you're going to complete and pay penalties if you don't. Keep yourself accountable and challenge friends to stay on track with your goals.",
        image: "🎯",
        imageUrl: "/Challenge App.png"
      }
  ]

  return (
    <section className="demo-projects" id="portfolio">
      <div className="container">
        <div className="section-header fade-in">
          <h2>🧪 Our Portfolio</h2>
          <p>Real Projects, Real Results — See What We've Built</p>
        </div>
        
        <div className="projects-intro fade-in">
          <p>We don't just talk about speed — we ship real, working SaaS apps. Each project below showcases our technical expertise, design thinking, and ability to deliver production-ready solutions.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card fade-in">
                              <div className="project-image-container">
                  <div className="project-image">
                    {/* Show actual images for all projects */}
                    <img src={project.imageUrl} alt={project.title} className="project-screenshot" />
                  </div>
                </div>
                
                                                <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    {/* Show status badges for all projects */}
                    {project.id === 4 ? (
                      <div className="project-status-inline">
                        <span className="status-badge building">🔨 Currently Building</span>
                      </div>
                    ) : (
                      <div className="project-status-inline">
                        <span className="status-badge live">🚀 MVP Live</span>
                      </div>
                    )}
                  </div>
            </div>
          ))}
        </div>

        <div className="projects-cta fade-in">
          <button className="see-more-btn">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

// Why Choose Us Section
const WhyChooseUsSection = () => {
  const reasons = [
    {
      title: "Speed That Actually Delivers",
      quote: "We don't take months. We ship MVPs in just 15 days.",
      description: "We're obsessed with momentum. Founders don't have time to wait — we help you go from zero to live with a working product in just 15 days."
    },
    {
      title: "AI Integration, Done Right",
      quote: "AI isn't an afterthought — it's part of our stack.",
      description: "From GPT-based features to smart automation, we bring real AI functionality into your product — not just buzzwords or vague promises."
    },
    {
      title: "Built by Developers, Not Drag-and-Drop Tools",
      quote: "No janky no-code hacks. Just clean, scalable code.",
      description: "Unlike no-code platforms that break at scale, we build real, full-stack apps using the latest frameworks. Future-proof and ready for investors."
    },
    {
      title: "Scalable Architecture from Day One",
      quote: "What works for MVP… stays solid for V1, V2, and beyond.",
      description: "We write modular, production-ready code that's easy to scale, maintain, and hand off. You won't need to rebuild from scratch."
    },
    {
      title: "Founder-First Approach",
      quote: "We're lean, responsive, and easy to work with.",
      description: "No bloated teams, no slow meetings, no agency layers. Just direct, fast collaboration with the person building your product."
    },
    {
      title: "Startup-Minded, Outcome-Focused",
      quote: "We're not just devs — we think like product people.",
      description: "We care about user experience, validation strategy, and fast feedback loops. We help you prioritize what to build first."
    }
  ]

  return (
    <section className="why-choose-us" id="why-us">
      <div className="container">
        <div className="section-header fade-in">
          <h2>✨ Why Choose Us?</h2>
          <p>We're not just builders — we're your product partners.</p>
                </div>
                
        <div className="intro-text fade-in">
          <p>In a sea of bloated agencies and cookie-cutter no-code tools, we offer something different: speed, precision, and a deep understanding of what founders actually need to launch and grow.</p>
                </div>
                
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card fade-in">
              <h3 className="reason-title">{reason.title}</h3>
              <div className="reason-quote">"{reason.quote}"</div>
              <p className="reason-description">{reason.description}</p>
                </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQs Section
const FAQSection = () => {
  const faqs = [
    {
      question: "What's included in 15-day MVP?",
      answer: "Our 15-day MVP includes core features, responsive UI, authentication, dashboard, and 1-2 main modules. We focus on essential functionality that validates your idea quickly without unnecessary complexity."
    },
    {
      question: "Can I add features later?",
      answer: "Absolutely! We build with scalability in mind. You can easily add new features, modules, or integrations as your startup grows. Our modular architecture makes future development straightforward."
    },
    {
      question: "Is AI integration included?",
      answer: "Yes! AI integration is part of our standard package. We include 1 AI feature (like chatbot, content generator, or data analysis) using OpenAI, Gemini, or other AI tools to give your MVP a competitive edge."
    },
    {
      question: "What if I don't have a design yet?",
      answer: "No problem! We can work with your existing design, create one from scratch, or use our proven UI patterns. We're flexible and can start with wireframes or even just a description of your vision."
    },
    {
      question: "Do you help after launch?",
      answer: "Yes, we provide 7 days of post-launch support including bug fixes, walkthroughs, and guidance. We also offer ongoing support packages for maintenance, updates, and feature additions."
    }
  ]

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header fade-in">
          <h2>❓ FAQs</h2>
          <p>Common questions from founders like you</p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item fade-in ${index === faqs.length - 1 ? 'faq-item-full-width' : ''}`}>
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact/CTA Section
const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header fade-in">
          <h2>🚀 Ready to Build Your MVP?</h2>
          <p>Let's turn your idea into a working product in just 15 days</p>
        </div>

        <div className="contact-content fade-in">
          <div className="contact-form">
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const name = formData.get('name');
              const email = formData.get('email');
              const budget = formData.get('budget');
              const idea = formData.get('idea');
              
              // Validate form data
              if (!name || !email || !budget || !idea) {
                alert('Please fill in all fields');
                return;
              }
              
              console.log('Contact form submitted:', { name, email, budget, idea });
              
              // Create email body
              const emailBody = `Name: ${name}\nEmail: ${email}\nBudget: ${budget}\nProject Idea: ${idea}`;
              const emailSubject = 'New MVP Project Request - Compye Labs';
              
              // Create mailto URL
              const mailtoUrl = `mailto:amaykorade5@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
              
              // Open default email client
              try {
                window.location.href = mailtoUrl;
              } catch (error) {
                console.error('Error opening email client:', error);
                // Fallback: copy email content to clipboard
                navigator.clipboard.writeText(`Subject: ${emailSubject}\n\n${emailBody}`).then(() => {
                  alert('Email content copied to clipboard. Please send it to amaykorade5@gmail.com');
                });
              }
            }}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="budget">Budget Range</label>
                <select id="budget" name="budget" required>
                  <option value="">Select Budget Range</option>
                  <option value="$4,000 - $6,000">$4,000 - $6,000</option>
                  <option value="$6,000 - $10,000">$6,000 - $10,000</option>
                  <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                  <option value="$20,000 - $50,000">$20,000 - $50,000</option>
                  <option value="$50,000+">$50,000+</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="idea">Tell us about your startup idea</label>
                <textarea id="idea" name="idea" placeholder="Describe your vision, target users, and what problem you're solving..." rows="5" required></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Let's Build Your MVP
              </button>
              
              <div className="response-time">
                <p>⏰ We respond back within 12-18 hours</p>
              </div>
            </form>
          </div>
          
          <div className="contact-info">
            <h3>Connect us on WhatsApp</h3>
            <p>Bring your ideas to life fast! Chat with us directly on WhatsApp to discuss your project and get started immediately.</p>
            <a href="https://wa.me/919146837805" target="_blank" rel="noopener noreferrer" className="calendar-btn whatsapp-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Process Section
const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Discovery & Strategy",
      description: "We dive deep into your vision, target market, and business goals to create a strategic roadmap for your MVP."
    },
    {
      number: "2",
      title: "Design & Prototype",
      description: "Create user-focused designs and interactive prototypes that validate your concept before development begins."
    },
    {
      number: "3",
      title: "Rapid Development",
      description: "Build your MVP using agile methodologies, delivering working features every sprint for continuous feedback."
    },
    {
      number: "4",
      title: "Launch & Iterate",
      description: "Deploy your MVP and gather real user data to inform future iterations and scaling decisions."
    }
  ]

  return (
    <section className="process" id="process-old">
      <div className="container">
        <div className="section-header fade-in">
          <h2>Our Proven Process</h2>
          <p>A streamlined approach that gets your MVP to market faster while maintaining the highest quality standards.</p>
              </div>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step fade-in">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
const CTASection = () => (
  <section className="cta-section" id="cta">
    {/* Enhanced Background Elements */}
    <div className="cta-bg-elements">
      <div className="cta-orb cta-orb-1"></div>
      <div className="cta-orb cta-orb-2"></div>
      <div className="cta-orb cta-orb-3"></div>
      <div className="cta-particles">
        {[...Array(20)].map((_, i) => {
          // Use deterministic values based on index to avoid hydration mismatch
          const left = (i * 5.5) % 100;
          const top = (i * 3.7 + 10) % 100;
          const delay = (i * 0.15) % 3;
          const duration = 3 + (i % 3) * 0.5;
          
          return (
            <div key={i} className="cta-particle" style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`
            }}></div>
          );
        })}
      </div>
      <div className="cta-grid-overlay"></div>
    </div>
    
    <div className="container">
      <div className="cta-content fade-in">
        <div className="cta-badge">
          <span className="cta-badge-icon">🚀</span>
          <span>Ready to Launch?</span>
        </div>
        
        <h2>Ready to Build Your MVP?</h2>
        <p>Join successful founders who trusted us to bring their ideas to life. Let's turn your vision into reality.</p>
        
        <div className="cta-stats">
          <div className="cta-stat">
            <div className="cta-stat-number">4+</div>
            <div className="cta-stat-label">Projects Launched</div>
          </div>
          <div className="cta-stat">
            <div className="cta-stat-number">15</div>
            <div className="cta-stat-label">Days Average</div>
          </div>
          <div className="cta-stat">
            <div className="cta-stat-number">100%</div>
            <div className="cta-stat-label">Success Rate</div>
          </div>
        </div>
        
        <div className="cta-actions">
          <a href="#contact" className="cta-button primary">
            <span>Start Your Project</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="https://wa.me/919146837805" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
        
        <div className="cta-trust">
          <div className="cta-trust-text">Trusted by founders worldwide</div>
          <div className="cta-trust-badges">
            <div className="trust-badge">⚡ Fast Delivery</div>
            <div className="trust-badge">🔒 Secure</div>
            <div className="trust-badge">💎 Premium Quality</div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

// Bottom Navigation Bar
const BottomNav = () => (
  <div className="bottom-nav">
    <div className="bottom-nav-content">
              <div className="bottom-nav-logo">
          <span className="logo-text">Compye Labs</span>
        </div>
              <div className="bottom-nav-links">
          <a href="#packages" className="bottom-nav-link">What We Offer</a>
          <a href="#process" className="bottom-nav-link">How It Works</a>
          <a href="#portfolio" className="bottom-nav-link">Our Work</a>
          <a href="#contact" className="bottom-nav-link">Contact</a>
          <a href="https://x.com/KoradeAmay" target="_blank" rel="noopener noreferrer" className="bottom-nav-link social-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            X
          </a>
        </div>
      <div className="bottom-nav-cta">
        <a href="#contact" className="bottom-cta-button">Start Your Project</a>
      </div>
    </div>
  </div>
)

// Footer Section
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-text">
          <p>&copy; 2025 Compye Labs. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a href="#privacy" className="footer-link">Privacy Policy</a>
          <a href="#terms" className="footer-link">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
)

// Main App Component
export default function App() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(e.target.getAttribute('href'))
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    document.addEventListener('click', handleSmoothScroll)

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el)
    })

    // Custom cursor
    const handleMouseMove = (e) => {
      try {
        let cursor = document.querySelector('.cursor')
        
        // Create cursor if it doesn't exist
        if (!cursor) {
          cursor = document.createElement('div')
          cursor.className = 'cursor'
          cursor.style.position = 'fixed'
          cursor.style.width = '20px'
          cursor.style.height = '20px'
          cursor.style.background = 'radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, transparent 70%)'
          cursor.style.borderRadius = '50%'
          cursor.style.pointerEvents = 'none'
          cursor.style.zIndex = '9999'
          cursor.style.transition = 'transform 0.1s ease'
          document.body.appendChild(cursor)
        }
        
        // Update cursor position
        if (cursor && cursor.style) {
          cursor.style.left = (e.clientX - 10) + 'px'
          cursor.style.top = (e.clientY - 10) + 'px'
        }
      } catch (error) {
        // Silently handle any cursor errors
        console.log('Cursor error:', error)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('click', handleSmoothScroll)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <main className="min-h-screen bg-black">
      <AnimatedBackground />
      <HeroSection />
      <WhatWeOfferSection />
      <HowItWorksSection />
      <DemoProjectsSection />
      <WhyChooseUsSection />
      <FAQSection />
      <ContactSection />
      <ProcessSection />
      <CTASection />
      <BottomNav />
      <Footer />
    </main>
  )
}
