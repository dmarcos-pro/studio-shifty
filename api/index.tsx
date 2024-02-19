const baseUrlServer = process.env.SERVER_URL as string


export const fetchProjects = async () => {
  try {
    const response = await fetch(`${baseUrlServer}/projects`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Erreur lors du fetch /projects :', error);
    throw error;
  }
}

export const fetchServices = async () => {
  try {
    const response = await fetch(`${baseUrlServer}/services`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Erreur lors du fetch /services :', error);
    throw error;
  }
}

export const fetchFeedback = async () => {
  try {
    const response = await fetch(`${baseUrlServer}/feedback`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Erreur lors du fetch /feedback :', error);
    throw error;
  }
}

type Nav = {
  category: string
}
export const fetchNav = async (category: string) => {
  try {
    const response = await fetch(`${baseUrlServer}/navigation`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données de navigation légale');
    }
    const data = await response.json();
    const navLegal = data.filter((item: Nav) => item.category.includes(`${category}`));
    return navLegal;
  } catch (error) {
    console.error('Erreur lors du fetch /navigation :', error);
    throw error; // Re-lancez l'erreur pour que React Query puisse la gérer
  }
};