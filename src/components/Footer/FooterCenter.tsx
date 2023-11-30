


type TfooterCenterProps ={
  title: string;
  subtitle: string[]; 
}




export const FooterCenter: React.FC<TfooterCenterProps> = ({ title, subtitle }) => {
  return (
    <div className="w-fit flex flex-col">
      <h1 className="text-[20px] font-semibold">{title}</h1>
      {subtitle.map((sub, i) => (
        <a key={i} href="">
          <li className="mt-[20px] hover:text-[#FF7010]">{sub}</li>
        </a>
      ))}
    </div>
  );
};
