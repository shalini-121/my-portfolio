export const weatherCrimePredictionProject = {
  id: 2,
  title: "Weather-Driven Crime Prediction",
  description:
    "A machine learning project that analyzes the relationship between weather patterns and crime occurrences to build a predictive model using the XGBoost algorithm.",
  image: "/paper/project-2.webp", // Replace with your image file path
  tools: [
    "Python",
    "XGBoost",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Scikit-learn",
    "Jupyter Notebook"
  ],
  slug: "weather-driven-crime-prediction",
  overview:
    "This project investigates how weather conditions influence crime rates in urban areas. By integrating crime records with weather data, it leverages the XGBoost algorithm to train a powerful predictive model. The goal is to support data-driven public safety planning.",
  challenges: [
    "Merging and cleaning multiple datasets from weather and crime sources.",
    "Engineering meaningful features that reflect environmental influences on crime.",
    "Tuning the XGBoost model to prevent overfitting and improve generalization.",
    "Visualizing complex correlations between weather patterns and various types of crimes."
  ],
  solution:
    "Utilized XGBoost for its robustness and handling of structured data. Performed extensive feature engineering and preprocessing. Applied visualization libraries like Matplotlib and Seaborn to understand trends and patterns. Used cross-validation and hyperparameter tuning for optimal model performance.",
  outcome:
    "Achieved high prediction accuracy on unseen data, demonstrating that weather variables (such as temperature, rainfall, and humidity) can be used as significant predictors of crime occurrences. The project serves as a prototype for intelligent policing and early alert systems.",
};
