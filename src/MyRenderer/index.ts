const renderer = (
  tag: string,
  attr: { [attr: string]: string },
  child: any
) => {
  let attrString = "";

  Object.entries(attr).forEach(([key, value]) => {
    attrString += ` ${key} = `;
    attrString += ` "${value}" `;
  });

  return `<${tag}>${child}</${tag}>`;
};

export default renderer;
