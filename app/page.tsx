import React from "react";

export const metadata = {
  title: "SDNIoT Dataset",
  description: "Explore IoT security, malware detection, and intrusion analysis with the SDNIoT dataset.",
};

const SDNIoTDataset = async () => {
  // Static data for SSG
  const citation = `G. Suchetha, K. Pushpalatha, S. M. Sooraj, V. S. Naik, Tanishka, and T. U. Saniha,
    "Enhancing Machine Learning Model Accuracy through Novel SDNIoT Dataset Generation," 
    2024 International Conference on Intelligent Systems for Cybersecurity (ISCS), Gurugram, India, 2024, pp. 01-06, 
    doi: `;

  const doiLink = "https://doi.org/10.1109/ISCS61804.2024.10581240";
  const datasetLink = "https://github.com/Suchetha9/Dataset/tree/main";
  const repositoryLink =
    "https://github.com/Suchetha9/Dataset/tree/main?tab=readme-ov-file";

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow py-6">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <h1 className="text-3xl font-bold text-gray-800">The SDNIoT Dataset</h1>
          <p className="mt-2 text-gray-600">
            Faculty:{" "}
            <a
              href={repositoryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Dataset Repository
            </a>
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex bg-gray-50">
        <div className="container mx-auto px-8 py-10 space-y-6">
          {/* Dataset Details */}
          <section>
            <h2 className="text-xl font-bold text-red-600 mb-4">
              Academic/Public Use of the SDNIoT Dataset
            </h2>
            <p className="text-gray-700">
              The details of the SDNIoT dataset were published in the following
              paper. For academic or public use of this dataset, the authors
              must cite the paper below:
            </p>
          </section>

          {/* Citation */}
          <section className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800">Citation:</h3>
            <p className="mt-2 text-gray-700">
              {citation}
              <a
                href={doiLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                10.1109/ISCS61804.2024.10581240
              </a>
              .
            </p>
          </section>

          {/* Repository Link */}
          <section>
            <p className="text-gray-700">
              The dataset is available for download at:{" "}
              <a
                href={datasetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                SDNIoT Dataset Repository
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SDNIoTDataset;
