const PolicyPage = () => {
  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-10 my-10">
      <div className="w-full max-w-3xl bg-base-200 shadow-xl hover:shadow-2xl rounded-3xl p-6 md:p-8">
        
        <h1 className="text-3xl font-bold text-center mb-7">Privacy Policy</h1>
        <p className="text-lg text-center mb-4">
          Your privacy is very important to us. This Privacy Policy explains how{" "}
          <strong>DayBook</strong> collects, uses, and protects your personal
          information when you use our website and services.
        </p>

        <div className="divider"></div>

        <h2 className="text-2xl font-bold text-center mb-4">Information We Collect</h2>
        <ul className="space-y-3 text-lg px-4 sm:px-6">
          <li className="flex items-start gap-2">
            <span>📧</span>
            <span>
              <strong>Personal Info:</strong> Name, email address, and account details
              you provide during signup or usage.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>📊</span>
            <span>
              <strong>Usage Data:</strong> Information about how you use DayBook,
              including pages visited and interactions.
            </span>
          </li>
        </ul>

        <div className="divider"></div>

        <h2 className="text-2xl font-bold text-center mb-4">How We Use Your Information</h2>
        <ul className="space-y-3 text-lg px-4 sm:px-6">
          <li className="flex items-start gap-2">
            <span>⚙️</span>
            <span>
              <strong>Improve Services:</strong> Enhance user experience and add new features.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>📩</span>
            <span>
              <strong>Communication:</strong> Send updates, offers, or important security notices.
            </span>
          </li>
        </ul>

        <div className="divider"></div>

        <h2 className="text-2xl font-bold text-center mb-4">Data Protection</h2>
        <p className="text-lg text-center mb-4">
          We use <strong>encrypted authentication</strong>, secure cookies, and
          other safeguards to ensure your personal data is protected from
          unauthorized access, alteration, or misuse.
        </p>

        <div className="divider"></div>

        <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-lg text-center">
          If you have any questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:example@mail.com" className="text-blue-500">italiyaabhi@gmail.com && utsavshyani@gmail.com</a>.
        </p>

      </div>
    </div>
  );
};

export default PolicyPage;
