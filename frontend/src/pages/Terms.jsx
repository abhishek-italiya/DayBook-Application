const Terms = () => {
  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-10 my-10">
      <div className="w-full max-w-3xl bg-base-200 shadow-xl hover:shadow-2xl rounded-3xl p-6 md:p-8">
        <h1 className="text-3xl font-bold text-center mb-7">Terms of Service</h1>
        <p className="text-lg text-center mb-4 text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <p className="text-lg text-center mb-6">
          Welcome to <strong>DayBook</strong>. By using our services, you agree to follow
          the rules and guidelines outlined below. Please read them carefully.
        </p>

        <div className="divider"></div>

        <h2 className="text-2xl font-bold text-center mb-4">1. Acceptance of Terms</h2>
        <p className="text-lg mb-6">
          By accessing DayBook, you confirm that you are at least 18 years old and agree
          to comply with these Terms. If you do not agree, please stop using our services.
        </p>

        <h2 className="text-2xl font-bold text-center mb-4">2. Use of Services</h2>
        <p className="text-lg mb-6">
          You may only use our services for lawful purposes. Misuse, abuse, or attempts to
          disrupt the platform may result in restricted or terminated access.
        </p>

        <h2 className="text-2xl font-bold text-center mb-4">3. Privacy Policy</h2>
        <p className="text-lg mb-6">
          Your data privacy is very important to us. Please review our{" "}
          <a href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>{" "}
          to understand how we collect, use, and protect your information.
        </p>

        <h2 className="text-2xl font-bold text-center mb-4">4. Intellectual Property</h2>
        <p className="text-lg mb-6">
          All content, designs, and trademarks on DayBook are owned by us. You may not copy,
          modify, or distribute them without written permission.
        </p>

        <h2 className="text-2xl font-bold text-center mb-4">5. Limitation of Liability</h2>
        <p className="text-lg mb-6">
          We are not liable for any damages caused by your use of DayBook. You use our
          services entirely at your own risk.
        </p>

        <h2 className="text-2xl font-bold text-center mb-4">6. Updates to Terms</h2>
        <p className="text-lg mb-6">
          We may update these Terms from time to time. Continuing to use DayBook after changes
          means you accept the updated terms.
        </p>

        <h2 className="text-2xl font-bold text-center mb-4">7. Contact Us</h2>
        <p className="text-lg text-center">
          Have questions about these Terms? Reach out to us at:{" "}
          <a href="mailto:italiyaabhi@gmail.com" className="text-blue-600 hover:underline">
            italiyaabhi@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Terms;
