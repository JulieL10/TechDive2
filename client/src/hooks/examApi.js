export const fetchExams = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/exams/');
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error loading data. Please try again later.');
    }
  };
  