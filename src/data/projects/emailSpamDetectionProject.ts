export const emailSpamDetectionProject = {
  id: 3,
  title: "Email Spam Detection Using Machine Learning",
  description:
    "A machine learning project to classify emails as spam or not spam using NLP techniques and classification algorithms.",
  image: "/paper/project-3.webp", // Update this with your actual image path
  tools: [
    "Python",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Natural Language Processing (NLP)",
    "TfidfVectorizer",
    "Logistic Regression",
    "Naive Bayes",
    "Matplotlib",
    "Seaborn",
    "Jupyter Notebook"
  ],
  slug: "email-spam-detection",
  overview:
    "This project focuses on developing a reliable machine learning model to detect spam emails using text classification. It involves data preprocessing, feature extraction using TF-IDF, and training models to identify spam based on email content.",
  challenges: [
    "Cleaning and preprocessing unstructured email text data.",
    "Extracting relevant features that reflect spam characteristics.",
    "Choosing an effective classifier with balanced performance.",
    "Visualizing class imbalance and model performance."
  ],
  solution:
    "Applied text preprocessing and feature extraction techniques like tokenization, stopword removal, and TF-IDF vectorization. Trained multiple classifiers including Naive Bayes and Logistic Regression. Evaluated using confusion matrix, accuracy, precision, and recall. Used Matplotlib and Seaborn for insights.",
  outcome:
    "Built a lightweight and accurate spam detection system with strong performance on both training and testing data. This project demonstrates the application of NLP and machine learning in automating email filtering systems.",
};
