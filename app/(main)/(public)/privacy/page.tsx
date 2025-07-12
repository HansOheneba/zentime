import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Effective Date:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                1. Introduction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Welcome to ZenTime (&quot;we,&quot; &quot;us,&quot;
                &quot;our,&quot; or &quot;the Service&quot;). This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you use our scheduling and calendar
                management application. We are committed to protecting your
                privacy and ensuring transparency about our data practices.
              </p>
              <p className="text-gray-700">
                By accessing or using ZenTime, you agree to the collection and
                use of information in accordance with this Privacy Policy. If
                you do not agree with our policies and practices, please do not
                use our Service.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                2. Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  2.1 Information You Provide Directly
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>
                    Account registration information (email address, name,
                    profile information)
                  </li>
                  <li>
                    Event details (event names, descriptions, durations,
                    schedules)
                  </li>
                  <li>Availability preferences and scheduling information</li>
                  <li>
                    Calendar integration data when you connect third-party
                    services
                  </li>
                  <li>Communications with us (support requests, feedback)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">
                  2.2 Information Collected Automatically
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>
                    Device information (IP address, browser type, device
                    identifiers)
                  </li>
                  <li>
                    Usage information (pages visited, features used, time spent)
                  </li>
                  <li>Log files and technical data</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Location data (if permitted by your device settings)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">
                  2.3 Third-Party Integration Data
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Google Calendar events and availability information</li>
                  <li>
                    Authentication data from Clerk authentication services
                  </li>
                  <li>
                    OAuth tokens and refresh tokens for connected services
                  </li>
                  <li>Calendar metadata and scheduling preferences</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                3. How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>To provide, maintain, and improve our Service</li>
                <li>To create and manage your account</li>
                <li>To process and facilitate scheduling requests</li>
                <li>To integrate with third-party calendar services</li>
                <li>To send you service-related communications</li>
                <li>
                  To respond to your inquiries and provide customer support
                </li>
                <li>To detect, prevent, and address technical issues</li>
                <li>To enforce our Terms of Service and other policies</li>
                <li>To comply with legal obligations</li>
                <li>
                  To protect the rights, property, and safety of our users
                </li>
                <li>To improve our algorithms and recommendation systems</li>
                <li>To conduct analytics and research</li>
              </ul>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                4. How We Share Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  4.1 With Your Consent
                </h3>
                <p className="text-gray-700">
                  We may share your information when you explicitly consent to
                  such sharing, including when you choose to share your
                  availability with others or connect third-party services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">
                  4.2 Service Providers
                </h3>
                <p className="text-gray-700">
                  We share information with trusted third-party service
                  providers who assist us in operating our Service, including:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Clerk (authentication and user management)</li>
                  <li>Google (calendar integration and OAuth services)</li>
                  <li>Neon Database (data storage and management)</li>
                  <li>
                    Vercel or similar hosting and infrastructure providers
                  </li>
                  <li>Analytics and monitoring services</li>
                  <li>Payment processing services (if applicable)</li>
                  <li>Email delivery services for notifications</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">
                  4.3 Legal Requirements
                </h3>
                <p className="text-gray-700">
                  We may disclose your information if required by law,
                  regulation, legal process, or governmental request, or to
                  protect the rights, property, or safety of ZenTime, our users,
                  or others.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">
                  4.4 Business Transfers
                </h3>
                <p className="text-gray-700">
                  In the event of a merger, acquisition, or sale of assets, your
                  information may be transferred as part of the transaction,
                  subject to appropriate confidentiality protections.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                5. Data Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We implement industry-standard security measures to protect your
                information against unauthorized access, alteration, disclosure,
                or destruction, including:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Database encryption at rest</li>
                <li>Regular security audits and monitoring</li>
                <li>Access controls and authentication systems</li>
                <li>Secure hosting infrastructure</li>
                <li>Regular backup and recovery procedures</li>
              </ul>
              <p className="text-gray-700">
                However, no method of transmission over the internet or
                electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>
              <p className="text-gray-700">
                <strong>DISCLAIMER:</strong> While we strive to protect your
                information using commercially reasonable security measures, we
                cannot guarantee absolute security. You use our Service at your
                own risk, and we disclaim all liability for any security
                breaches, data loss, or unauthorized access to your information
                that may occur despite our security measures.
              </p>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                6. Data Retention
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We retain your information for as long as necessary to provide
                our Service, comply with legal obligations, resolve disputes,
                and enforce our agreements. Specifically:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>
                  Account information: Retained while your account is active and
                  for 2 years after account deletion
                </li>
                <li>
                  Event and scheduling data: Retained for 5 years after last
                  activity for business purposes
                </li>
                <li>
                  Communication records: Retained for 3 years for customer
                  support purposes
                </li>
                <li>
                  Legal and compliance data: Retained as required by Ghanaian
                  law
                </li>
                <li>
                  Anonymized data: May be retained indefinitely for analytics
                  and research
                </li>
              </ul>
              <p className="text-gray-700">
                When you delete your account, we will delete or anonymize your
                personal information within 30 days, unless we are required to
                retain it by law or for legitimate business purposes (such as
                fraud prevention).
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                7. Your Rights and Choices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  7.1 Access and Correction
                </h3>
                <p className="text-gray-700">
                  You may access and update your account information through
                  your account settings. You may also request a copy of your
                  personal information by contacting us.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">7.2 Deletion</h3>
                <p className="text-gray-700">
                  You may request deletion of your account and personal
                  information, subject to our legal obligations and legitimate
                  business interests.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">7.3 Portability</h3>
                <p className="text-gray-700">
                  You may request a copy of your personal information in a
                  structured, machine-readable format.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">7.4 Communications</h3>
                <p className="text-gray-700">
                  You may opt out of promotional communications by following the
                  unsubscribe instructions in the email or contacting us
                  directly.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cookies and Tracking */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                8. Cookies and Tracking Technologies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We use cookies, web beacons, and similar tracking technologies
                to collect information about your use of our Service. These
                technologies help us:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Remember your preferences and settings</li>
                <li>Authenticate your identity</li>
                <li>Analyze usage patterns and improve our Service</li>
                <li>Provide personalized content and features</li>
                <li>Detect and prevent fraud</li>
              </ul>
              <p className="text-gray-700">
                You can control cookies through your browser settings, but
                disabling cookies may affect the functionality of our Service.
              </p>
            </CardContent>
          </Card>

          {/* Third-Party Services */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                9. Third-Party Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Our Service integrates with third-party services, including
                Google Calendar and Clerk authentication. These services have
                their own privacy policies and terms of service. We are not
                responsible for the privacy practices of these third parties.
              </p>
              <p className="text-gray-700">
                <strong>DISCLAIMER:</strong> We disclaim all liability for the
                privacy practices, data collection, and use of information by
                third-party services integrated with our platform.
              </p>
            </CardContent>
          </Card>

          {/* International Data Transfers */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                10. International Data Transfers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Your information may be transferred to and processed in
                countries other than Ghana, including the United States and
                European Union countries, where our service providers operate.
                By using our Service, you consent to such transfers. We will
                take reasonable steps to ensure appropriate safeguards are in
                place, including:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>
                  Ensuring service providers have adequate data protection
                  measures
                </li>
                <li>Using standard contractual clauses where applicable</li>
                <li>Complying with applicable data protection laws</li>
                <li>
                  Implementing technical and organizational security measures
                </li>
              </ul>
              <p className="text-gray-700">
                <strong>DISCLAIMER:</strong> We cannot guarantee that foreign
                jurisdictions will provide the same level of data protection as
                Ghana or your home jurisdiction. Different countries may have
                different privacy laws and government access rights.
              </p>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                11. Children&apos;s Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Our Service is not intended for use by children under the age of
                18 years. We do not knowingly collect personal information from
                children under 18. If you are a parent or guardian and believe
                we have collected information from a child under 18, please
                contact us immediately at privacy@zentime.com.
              </p>
              <p className="text-gray-700">
                In compliance with Ghanaian law and international standards, we
                will take steps to delete any personal information of minors
                that has been collected without proper parental consent.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Privacy Policy */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                12. Changes to This Privacy Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the new Privacy
                Policy on this page and updating the effective date. Your
                continued use of the Service after any changes constitutes
                acceptance of the new Privacy Policy.
              </p>
              <p className="text-gray-700">
                <strong>DISCLAIMER:</strong> It is your responsibility to review
                this Privacy Policy periodically for changes. We are not
                obligated to provide individual notice of changes.
              </p>
            </CardContent>
          </Card>

          {/* Disclaimers and Limitations */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                13. Disclaimers and Limitations of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">13.1 Data Accuracy</h3>
                <p className="text-gray-700">
                  <strong>
                    WE MAKE NO REPRESENTATIONS OR WARRANTIES ABOUT THE ACCURACY,
                    COMPLETENESS, OR RELIABILITY OF YOUR DATA OR INFORMATION
                    STORED ON OUR SERVICE. YOU ARE SOLELY RESPONSIBLE FOR THE
                    ACCURACY OF YOUR DATA.
                  </strong>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">
                  13.2 Service Availability
                </h3>
                <p className="text-gray-700">
                  <strong>
                    WE DO NOT GUARANTEE CONTINUOUS, UNINTERRUPTED, OR SECURE
                    ACCESS TO OUR SERVICE. YOUR USE OF THE SERVICE IS AT YOUR
                    OWN RISK.
                  </strong>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">
                  13.3 Third-Party Integration
                </h3>
                <p className="text-gray-700">
                  <strong>
                    WE ARE NOT RESPONSIBLE FOR THE PRIVACY PRACTICES, SECURITY
                    MEASURES, OR DATA HANDLING OF THIRD-PARTY SERVICES
                    INTEGRATED WITH OUR PLATFORM, INCLUDING BUT NOT LIMITED TO
                    GOOGLE CALENDAR AND CLERK AUTHENTICATION.
                  </strong>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">13.4 Data Loss</h3>
                <p className="text-gray-700">
                  <strong>
                    WE SHALL NOT BE LIABLE FOR ANY LOSS, CORRUPTION, OR
                    UNAUTHORIZED ACCESS TO YOUR DATA, REGARDLESS OF THE CAUSE.
                    YOU ARE ADVISED TO MAINTAIN BACKUP COPIES OF IMPORTANT
                    INFORMATION.
                  </strong>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">
                  13.5 Limitation of Liability
                </h3>
                <p className="text-gray-700">
                  <strong>
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE
                    LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                    OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF
                    PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF YOUR USE OF
                    THE SERVICE.
                  </strong>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Indemnification */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                14. Indemnification
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                <strong>
                  YOU AGREE TO INDEMNIFY, DEFEND, AND HOLD HARMLESS ZENTIME, ITS
                  AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS FROM
                  AND AGAINST ANY AND ALL CLAIMS, DAMAGES, LOSSES, COSTS, AND
                  EXPENSES (INCLUDING REASONABLE ATTORNEYS&apos; FEES) ARISING
                  OUT OF OR RELATING TO:
                </strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>
                  <strong>Your use of the Service</strong>
                </li>
                <li>
                  <strong>
                    Your violation of this Privacy Policy or our Terms of
                    Service
                  </strong>
                </li>
                <li>
                  <strong>Your violation of any third-party rights</strong>
                </li>
                <li>
                  <strong>
                    Any content you submit or share through the Service
                  </strong>
                </li>
                <li>
                  <strong>Your negligent or wrongful conduct</strong>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                15. Governing Law and Jurisdiction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                This Privacy Policy shall be governed by and construed in
                accordance with the laws of the Republic of Ghana, without
                regard to its conflict of law provisions. Any disputes arising
                under this Privacy Policy shall be subject to the exclusive
                jurisdiction of the courts of Ghana, specifically the High Court
                of Ghana.
              </p>
              <p className="text-gray-700">
                <strong>
                  By using our Service, you consent to the jurisdiction of the
                  Ghanaian courts and agree that any legal proceedings will be
                  conducted in accordance with Ghanaian law and procedures.
                </strong>
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                16. Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy or our
                privacy practices, please contact us at:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> hansoheneba.io@gmail.com
                </p>
                <p className="text-gray-700">
                  <strong>Support Email:</strong> hansoheneba.io@gmail.com
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> Accra, Ghana
                </p>
              </div>
              <p className="text-gray-700">
                <strong>
                  Please note that we may not respond to all inquiries and
                  reserve the right to direct you to publicly available
                  information or resources. We will make reasonable efforts to
                  respond to legitimate privacy-related inquiries within 30
                  days.
                </strong>
              </p>
            </CardContent>
          </Card>

          {/* Final Disclaimers */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                17. Final Disclaimers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                <strong>
                  BY USING ZENTIME, YOU ACKNOWLEDGE THAT YOU HAVE READ,
                  UNDERSTOOD, AND AGREE TO BE BOUND BY THIS PRIVACY POLICY. IF
                  YOU DO NOT AGREE TO THIS PRIVACY POLICY, YOU MUST NOT USE THE
                  SERVICE.
                </strong>
              </p>
              <p className="text-gray-700">
                <strong>
                  THIS PRIVACY POLICY CONSTITUTES THE ENTIRE AGREEMENT BETWEEN
                  YOU AND ZENTIME REGARDING THE PRIVACY OF YOUR INFORMATION AND
                  SUPERSEDES ALL PRIOR AGREEMENTS AND UNDERSTANDINGS.
                </strong>
              </p>
              <p className="text-gray-700">
                <strong>
                  THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
                  AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR
                  IMPLIED.
                </strong>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </p>
          <Link
            href="/"
            className="mt-4 inline-block text-blue-600 hover:text-blue-800 underline"
          >
            Return to ZenTime
          </Link>
        </div>
      </div>
    </div>
  );
}
