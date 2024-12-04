import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">SDNIoTBot Dataset</h1>
          <p className="text-lg">For Intelligent Security Research</p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* About the Dataset Section */}
        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">About the Dataset</h2>
          <p className="mb-6">
            Welcome to the SDNIoTBot Dataset! Here you can find resources for network intrusion detection and security analysis in the IoT domain.
          </p>
          {/* Links Section */}
          <div className="space-y-4">
            <a
              href="https://github.com/Suchetha9/Dataset/tree/main?tab=readme-ov-file"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 underline hover:text-blue-800"
            >
              GitHub Repository: SDNIoTBot Dataset
            </a>
            <a
              href="https://drive.google.com/file/d/1N2QLDPb90XOdxcuQ_Fb7ZSVOG4J3w_zY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 underline hover:text-blue-800"
            >
              Download Dataset
            </a>
          </div>
        </section>

        {/* PhD Working Person Details */}
        <section className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center">
          {/* Photo Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-200 rounded-full overflow-hidden mx-auto">
              <img
                src="/suchetha-photo.jpg" // Replace with the actual photo path
                alt="Mrs. Suchetha G"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="w-full md:w-3/4 md:pl-6">
            <h2 className="text-2xl font-bold mb-2">Mrs. Suchetha G</h2>
            <p className="text-lg font-semibold">Assistant Professor</p>
            <p className="mt-4">
              Department of Information Science & Engineering and CSE (Data Science),
              Sahyadri College of Engineering and Management,
              Adyar, Mangaluru - 575007
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p>If you have any questions, feel free to reach out:</p>
          <ul className="mt-4">
            <li>
              Email:{" "}
              <a
                href="mailto:suchetha.g@sahyadri.edu.in"
                className="text-blue-600 underline"
              >
                suchetha.g@sahyadri.edu.in
              </a>
            </li>
            <li>Phone: +91-98765-43210</li> {/* Replace with actual phone number */}
          </ul>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} SDNIoTBot Dataset. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
