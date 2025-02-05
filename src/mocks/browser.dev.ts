const enableMocking = async () => {
  if (import.meta.env.VITE_APP_API_MOCKING_ENABLED === 'enabled ') {
    const { worker } = await import('./browser');
    return worker.start().catch((error: Error) => console.error(error));
  }
  return null;
};

export default enableMocking;
