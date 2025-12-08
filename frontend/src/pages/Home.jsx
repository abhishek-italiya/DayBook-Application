import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="flex justify-center items-center min-h-[calc(100vh-64px-40px)] relative bg-base-200">
        <div className="text-center py-10 max-w-4xl mx-4">
          {user ? (
            <>
              <h1 className="text-4xl xl:text-6xl font-bold text-primary">
                Welcome Back, {user.data.firstName}! 👋
              </h1>
              <p className="text-lg mt-4 text-gray-600">
                Your thoughts are safe, secure, and always accessible. 
                Let’s continue your journaling journey with <strong>DayBook</strong>.
              </p>
              <Link to="/entries" className="btn btn-primary mt-6">
                Go to Your Entries
              </Link>
            </>
          ) : (
            <>
              <h1 className="text-4xl xl:text-6xl font-bold text-primary">
                Welcome to DayBook ✨
              </h1>
              <p className="text-lg mt-4 text-gray-600">
                A secure digital journal built for simplicity, privacy, and 
                self-reflection. Capture your daily moments, track your growth, 
                and build meaningful memories that last forever.
              </p>
              <Link to="/entries" className="btn btn-primary mt-6">
                Get Started for Free
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center pb-2">
          Powerful Features Built for You
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Everything you need to create, manage, and secure your journal entries.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="p-6 bg-base-100 shadow-lg rounded-2xl hover:shadow-2xl">
            <h4 className="text-xl font-semibold">📝 Easy Journaling</h4>
            <p className="mt-2 text-gray-500">
              Write daily thoughts, reflections, and experiences in a clean,
              distraction-free editor.
            </p>
          </div>
          <div className="p-6 bg-base-100 shadow-lg rounded-2xl hover:shadow-2xl">
            <h4 className="text-xl font-semibold">📅 Timeline of Memories</h4>
            <p className="mt-2 text-gray-500">
              View your entries as a timeline, revisit special days, and 
              rediscover your growth over time.
            </p>
          </div>
          <div className="p-6 bg-base-100 shadow-lg rounded-2xl hover:shadow-2xl">
            <h4 className="text-xl font-semibold">🔒 Secure & Private</h4>
            <p className="mt-2 text-gray-500">
              End-to-end encryption and secure authentication ensure 
              your data remains yours only.
            </p>
          </div>
          <div className="p-6 bg-base-100 shadow-lg rounded-2xl hover:shadow-2xl">
            <h4 className="text-xl font-semibold">⚡ Fast & Reliable</h4>
            <p className="mt-2 text-gray-500">
              Powered by modern cloud technologies so your thoughts are 
              always backed up and accessible.
            </p>
          </div>
          <div className="p-6 bg-base-100 shadow-lg rounded-2xl hover:shadow-2xl">
            <h4 className="text-xl font-semibold">🎨 Personalization</h4>
            <p className="mt-2 text-gray-500">
              Customize your profile, theme, and journaling style to 
              match your personality.
            </p>
          </div>
          <div className="p-6 bg-base-100 shadow-lg rounded-2xl hover:shadow-2xl">
            <h4 className="text-xl font-semibold">📊 Track Progress</h4>
            <p className="mt-2 text-gray-500">
              Measure your journaling streak, mood trends, and personal growth 
              through insightful stats.
            </p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="bg-base-200 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose DayBook?</h2>
          <p className="text-lg text-gray-600 mb-10">
            Unlike ordinary note apps, DayBook is crafted specifically for 
            journaling. We focus on <strong>simplicity</strong>, 
            <strong> privacy</strong>, and <strong> consistency</strong>.
          </p>
          <ul className="grid sm:grid-cols-2 gap-6 text-left text-lg">
            <li className="flex items-start gap-3">
              ✅ <span><strong>100% Secure:</strong> Your entries are encrypted and private.</span>
            </li>
            <li className="flex items-start gap-3">
              ✅ <span><strong>Cross-device:</strong> Access anywhere, anytime.</span>
            </li>
            <li className="flex items-start gap-3">
              ✅ <span><strong>No Ads:</strong> Focused writing without distractions.</span>
            </li>
            <li className="flex items-start gap-3">
              ✅ <span><strong>Free & Simple:</strong> Get started instantly.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Journaling Journey?
        </h2>
        <p className="text-gray-600 mb-6">
          Sign up today and begin documenting your thoughts, emotions, and growth.  
          <strong> DayBook</strong> makes journaling secure, simple, and meaningful.
        </p>
        <Link to="/entries" className="btn btn-primary">
          Start Writing Today 🚀
        </Link>
      </div>
    </div>
  );
};

export default Home;
