const apiCall = async path => {
  try {
    const res = await fetch(`http://api.warframestat.us/pc/${path}`);

    if (!res.ok) {
      const error = res.json();
      throw error;
    } else {
      return res.json();
    }
  } catch (error) {
    throw error;
  }
};

export default apiCall;
