// app/terms-of-service/page.js
import React from "react";
import LegalPageLayout from "../components/LegalPageLayout";
import { siteInfo } from "../../constants/siteInfo";

const TermsOfServiceContent = () => (
  <>
    <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>

    <h2 className="mt-6 text-2xl font-semibold">1. Acceptance of Terms</h2>
    <p>
      By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
    </p>

    <h2 className="mt-6 text-2xl font-semibold">2. Use of the Website</h2>
    <p>
      This website and its components are offered for informational purposes only; this site shall not be responsible or liable for the accuracy, usefulness or availability of any information transmitted or made available via the site, and shall not be responsible or liable for any error or omissions in that information.
    </p>

    <h2 className="mt-6 text-2xl font-semibold">3. Intellectual Property</h2>
    <p>
      The Site and its original content, features, and functionality are owned by {siteInfo.name} and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
    </p>
    
    <h2 className="mt-6 text-2xl font-semibold">4. Analytics and Tracking</h2>
    <p>
      This site uses third-party services for monitoring and analytics, including Google Analytics and Microsoft Clarity. These services may use cookies to collect information about your use of the website. By using this site, you consent to the processing of data about you by these third-party services in the manner and for the purposes set out in our Privacy Policy.
    </p>

    <h2 className="mt-6 text-2xl font-semibold">5. Governing Law</h2>
    <p>
      These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which the church is located, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
    </p>

    <h2 className="mt-6 text-2xl font-semibold">6. Contact Us</h2>
    <p>
      If you have any questions about these Terms, please contact us at <a href={`mailto:${siteInfo.email}`} className="text-primary hover:underline">{siteInfo.email}</a>.
    </p>

    <p className="mt-8 border-t pt-4 text-sm text-gray-500">
      <em>Disclaimer: This is a sample Terms of Service and is not legal advice. You should consult with a legal professional to ensure compliance with all applicable laws and regulations.</em>
    </p>
  </>
);

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout title="Terms of Service">
      <TermsOfServiceContent />
    </LegalPageLayout>
  );
}
