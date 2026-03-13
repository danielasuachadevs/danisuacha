export const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 120; // Matches our scroll-mt-32 (8rem = 128px)
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    // Update URL hash without jumping
    window.history.pushState(null, "", `#${id}`);
  }
};
