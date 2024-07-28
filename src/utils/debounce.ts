export default function debounce(callback: () => void, delay: number) {
  let timer: number;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(callback, delay);

    return () => clearTimeout(timer);
  };
}
