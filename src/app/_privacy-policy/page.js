// app/privacy-policy/page.js
import React from "react";
import LegalPageLayout from "../components/LegalPageLayout";
import { siteInfo } from "../../constants/siteInfo";

const PrivacyPolicyContent = () => (
  <>
    <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>
    
    <h2 className="mt-6 text-2xl font-semibold">1. Introduction</h2>
    <p>
      Welcome to {siteInfo.name}. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
    </p>

    <h2 className="mt-6 text-2xl font-semibold">2. Information We Collect</h2>
    <p>
      We may collect information about you in a variety of ways. The information we may collect on the Site includes:
    </p>
    <ul className="list-disc space-y-2 pl-6">
      <li>
        <strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you use our contact form.
      </li>
      <li>
        <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
      </li>
    </ul>

    <h2 className="mt-6 text-2xl font-semibold">3. Use of Your Information</h2>
    <p>
      Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
    </p>
    <ul className="list-disc space-y-2 pl-6">
      <li>Respond to your comments and questions and provide customer service.</li>
      <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
      <li>Protect against fraudulent, unauthorized, or illegal activity.</li>
    </ul>

    <h2 className="mt-6 text-2xl font-semibold">4. Third-Party Analytics</h2>
    <p>
      We use third-party analytics services to help understand your usage of our services and to improve our Site.
    </p>
    <ul className="list-disc space-y-2 pl-6">
      <li>
        <strong>Google Analytics:</strong> We use Google Analytics to understand how our audience uses the site. No personally identifiable information is collected by Google Analytics. For more information on how Google uses data when you use our partners' sites or apps, visit: <a href="https://policies.google.com/technologies/partner-sites" className="text-primary hover:underline">www.google.com/policies/privacy/partners/</a>.
      </li>
      <li>
        <strong>Microsoft Clarity:</strong> We use Microsoft Clarity to capture how users interact with our website. This helps us understand what's working and what's not, so we can improve the user experience. Clarity captures user interactions, such as how the page has rendered and what interactions users have with the site such as mouse movements, clicks, and scrolls. For more information about how Microsoft collects and uses your data, visit the <a href="https://privacy.microsoft.com/en-us/privacystatement" className="text-primary hover:underline">Microsoft Privacy Statement</a>.
      </li>
    </ul>

    <h2 className="mt-6 text-2xl font-semibold">5. Cookies and Tracking Technologies</h2>
    <p>
      We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience.
    </p>

    <h2 className="mt-6 text-2xl font-semibold">6. Contact Us</h2>
    <p>
      If you have questions or comments about this Privacy Policy, please contact us at <a href={`mailto:${siteInfo.email}`} className="text-primary hover:underline">{siteInfo.email}</a>.
    </p>
    
    <p className="mt-8 border-t pt-4 text-sm text-gray-500">
      <em>Disclaimer: This is a sample Privacy Policy and is not legal advice. You should consult with a legal professional to ensure compliance with all applicable laws and regulations.</em>
    </p>
  </>
);


export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <PrivacyPolicyContent />
    </LegalPageLayout>
  );
}
