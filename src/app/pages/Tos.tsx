'use client'; // This directive is necessary for client-side interactivity in Next.js App Router

import React from 'react';
import Link from 'next/link'; // Import Link for navigation back to home or other pages

// Main TermsOfService component for the VenueHUB
export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Header Section (Navbar) - Consistent with Homepage */}
      <header className="bg-white shadow-md py-4 px-6 md:px-12">
        <nav className="container mx-auto flex justify-between items-center">
          {/* Logo - Linked to Home */}
          <Link href="/" passHref>
            <div className="flex items-center space-x-2 text-3xl font-extrabold text-indigo-700 cursor-pointer">
              <img
                src="https://placehold.co/40x40/6366F1/FFFFFF?text=VH" // Placeholder logo
                alt="VenueHub Logo"
                width={40}
                height={40}
                className="rounded-full"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `https://placehold.co/40x40/6366F1/FFFFFF?text=VH`; // Fallback placeholder
                }}
              />
              <span>Venue<span className="text-indigo-500">Hub</span></span>
            </div>
          </Link>
          {/* Login Button (or other navigation) */}
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-md font-medium hover:bg-indigo-700 transition duration-300 shadow-md">
            Login
          </button>
        </nav>
      </header>

      <main className="container mx-auto p-4 md:p-8 my-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-indigo-800">
          VenueHUB Terms of Service
        </h1>

        <p className="text-gray-600 text-center mb-10 text-sm">
          **Last Updated: July 8, 2025**
        </p>

        <section className="prose max-w-none md:prose-lg lg:prose-xl mx-auto text-gray-700 leading-relaxed">
          <p className="mb-6">
            Welcome to VenueHUB! These Terms of Service ("Terms") govern your access to and use of the VenueHUB website, applications, and services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
          </p>

          <h2 className="text-3xl font-bold text-indigo-700 mb-4 mt-8">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By creating an account, booking a venue, or otherwise using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy. VenueHUB reserves the right to update or modify these Terms at any time without prior notice. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
          </p>

          <h2 className="text-3xl font-bold text-indigo-700 mb-4 mt-8">2. Description of Service</h2>
          <p className="mb-4">
            VenueHUB provides an online platform that connects individuals and organizations ("Users") seeking to book venues with venue owners and managers ("Hosts"). The Service facilitates the discovery, booking, and management of various types of venues for events, meetings, and other purposes.
          </p>

          <h2 className="text-3xl font-bold text-indigo-700 mb-4 mt-8">3. User Accounts</h2>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>
              <strong className="font-semibold">Registration:</strong> To access certain features of the Service, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
            </li>
            <li>
              <strong className="font-semibold">Account Security:</strong> You are responsible for safeguarding your password and for any activities or actions under your account. You agree to notify VenueHUB immediately of any unauthorized use of your account. VenueHUB cannot and will not be liable for any loss or damage arising from your failure to comply with the above requirements.
            </li>
            <li>
              <strong className="font-semibold">Eligibility:</strong> You must be at least 18 years old to use the Service. By using the Service, you represent and warrant that you meet this age requirement.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-indigo-700 mb-4 mt-8">4. Booking and Payments</h2>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>
              <strong className="font-semibold">Booking Process:</strong> Users can browse available venues, check availability, and submit booking requests through the Service. All booking requests are subject to confirmation by the Host.
            </li>
            <li>
              <strong className="font-semibold">Payment:</strong> Payments for venue bookings are processed through third-party payment processors. You agree to abide by the terms and conditions of these payment processors. All fees are displayed in the local currency unless otherwise specified.
            </li>
            <li>
              <strong className="font-semibold">Cancellations and Refunds:</strong> Cancellation policies are set by individual Hosts and will be clearly communicated during the booking process. VenueHUB is not responsible for Host cancellation policies or for processing refunds, which are handled according to the Host's stated terms.
            </li>
            <li>
              <strong className="font-semibold">Service Fees:</strong> VenueHUB may charge service fees to Users and/or Hosts for the use of the Service. Any such fees will be clearly disclosed before you complete a booking or listing.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-indigo-700 mb-4 mt-8">5. User Conduct</h2>
          <p className="mb-2">You agree not to:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Use the Service for any unlawful purpose or in any way that violates these Terms.</li>
            <li>Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or an entity.</li>
            <li>Interfere with or disrupt the integrity or performance of the Service.</li>
            <li>Attempt to gain unauthorized access to the Service or its related systems or networks.</li>
            <li>Post or transmit any content that is infringing, libelous, defamatory, obscene, pornographic, abusive, or otherwise violates any law or right of any third party.</li>
          </ul>

          <h2 className="text-3xl font-bold text-indigo-700 mb-4 mt-8">6. Content on the Service</h2>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>
              <strong className="font-semibold">User Content:</strong> You are solely responsible for all content that you upload, post, publish, or display through the Service. You grant VenueHUB a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, publish, and distribute your content in connection with the Service.
            </li>
            <li>
              <strong className="font-semibold">VenueHUB Content:</strong> All content provided by VenueHUB, including text, graphics, logos, and software, is the property of VenueHUB or its licensors and is protected by intellectual property laws.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-indigo-700 mb-4 mt-8">7. Disclaimers and Limitation of Liability</h2>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>
              <strong className="font-semibold">No Endorsement:</strong> VenueHUB does not endorse any Host or venue. While we strive to provide accurate information, we do not guarantee the quality, safety, or legality of any listed venues or the truth or accuracy of any listings.
            </li>
            <li>
              <strong className="font-semibold">"As Is" Basis:</strong> The Service is provided "as is" and "as available" without warranties of any kind, either express or implied.
            </li>
            <li>
              <strong className="font-semibold">Limitation of Liability:</strong> To the fullest extent permitted by law, VenueHUB shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the Service; (b) any conduct or content of any third party on the Service; or (c) unauthorized access, use, or alteration of your transmissions or content.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-indigo-700 mb-4 mt-8">8. Indemnification</h2>
          <p className="mb-4">
            You agree to indemnify and hold harmless VenueHUB and its affiliates, officers, agents, and employees from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your breach of these Terms or your violation of any law or the rights of a third party.
          </p>

          <h2 className="text-3xl font-bold text-indigo-700 mb-4 mt-8">9. Governing Law and Dispute Resolution</h2>
          <p className="mb-4">
            These Terms shall be governed by and construed in accordance with the laws of South Africa, without regard to its conflict of law principles. Any disputes arising from these Terms or the Service will be resolved through binding arbitration in Pretoria, South Africa, unless otherwise agreed by the parties.
          </p>

          <h2 className="text-3xl font-bold text-indigo-700 mb-4 mt-8">10. General Provisions</h2>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>
              <strong className="font-semibold">Entire Agreement:</strong> These Terms constitute the entire agreement between you and VenueHUB regarding the Service.
            </li>
            <li>
              <strong className="font-semibold">Severability:</strong> If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
            </li>
            <li>
              <strong className="font-semibold">Waiver:</strong> No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-indigo-700 mb-4 mt-8">11. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at: <a href="mailto:contact@venuehub.com" className="text-indigo-600 hover:underline">contact@venuehub.com</a>
          </p>
        </section>
      </main>

      {/* Footer Section - Consistent with Homepage */}
      <footer className="bg-gray-800 text-white py-8 px-6 md:px-12 mt-16 rounded-t-lg">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-4">
            &copy; {new Date().getFullYear()} VenueHUB. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="/privacy-policy" passHref>
              <span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">Privacy Policy</span>
            </Link>
            <Link href="/terms-of-service" passHref>
              <span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">Terms of Service</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
