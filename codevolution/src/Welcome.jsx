export const Welcome = ({name, alias}) => {
  return(
    <>
    <h2 className="mb-0 pb-0">Welcome, {name}</h2>
    <h3 className="mb-3">Also known as{alias}</h3>
    </>
  ) 
}
