const coverageGroups = Array.from(document.querySelectorAll("[data-coverage-group]"));

if (coverageGroups.length) {
  const defaultCoverage = {
    title: "What areas do we cover?",
    text: "We work nationwide with a trusted network of regional professional flooring teams, providing fast response times",
  };

  const regionCopy = {
    "north-west": {
      title: "Covering the North West of England",
      text: "Coverage of the North West of England -  including Liverpool & Merseyside, Cheshire, Lancashire & Preston, Greater Manchester and surrounding areas",
    },
    "north-east": {
      title: "Covering the North East of England",
      text: "Coverage of the North East of England -  including Yorkshire, Tyne & Wear, County Durham, Teeside and surrounding areas",
    },
    scotland: {
      title: "Covering Scotland",
      text: "Coverage of Southern Scotland & Central belt - including Glasgow, Edinburgh and surrounding areas",
    },
    wales: {
      title: "Covering Wales",
      text: "Coverage across Wales, including Cardiff, Swansea, Newport, Wrexham, Bangor and surrounding areas",
    },
    "west-midlands": {
      title: "Covering the West Midlands",
      text: "Coverage across Birmingham & Black Country, Coventry & Warwickshire, Staffordshire, Worcestershire and surrounding areas",
    },
    "east-midlands": {
      title: "Covering the East Midlands",
      text: "Coverage across Nottinghamshire, Lincolnshire, Leicestershire, Derbyshire, Northamptonshire and surrounding areas",
    },
    "northern-ireland": {
      title: "Covering Northern Ireland",
      text: "Coverage across Northern Ireland, including Belfast, Derry/Londonderry, Lisburn, Armagh, and surrounding areas.",
    },
    "south-east": {
      title: "Covering the South East of England",
      text: "Coverage across Norfolk, Suffolk, Bedfordshire, Cambridgeshire, Essex, Hertfordshire, Greater London, Kent, East Sussex",
    },
    south: {
      title: "Covering the South of England",
      text: "Coverage across Gloucestershire, Oxfordshire, Buckinghamshire, Berkshire, Wiltshire, Somerset, Dorset, Hampshire & West Sussex",
    },
  };

  coverageGroups.forEach((group) => {
    const coverageTitle = group.querySelector("[data-coverage-title]");
    const coverageText = group.querySelector("[data-coverage-text]");
    const coverageRegionButtons = Array.from(group.querySelectorAll("[data-region-key]"));

    if (!coverageTitle || !coverageText || !coverageRegionButtons.length) return;

    const setCoverage = (copy) => {
      coverageTitle.textContent = copy.title;
      coverageText.textContent = copy.text;
    };

    const resetCoverage = () => setCoverage(defaultCoverage);

    coverageRegionButtons.forEach((button) => {
      const key = button.dataset.regionKey;
      const copy = regionCopy[key];
      if (!copy) return;

      button.addEventListener("mouseenter", () => setCoverage(copy));
      button.addEventListener("focus", () => setCoverage(copy));
      button.addEventListener("mouseleave", resetCoverage);
      button.addEventListener("blur", resetCoverage);
    });
  });
}
