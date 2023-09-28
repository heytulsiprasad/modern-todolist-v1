import Input from "./Input"

const TabLayout = ({ children, uid }) => {
  return (
    <>
      <Input uid={uid} />
      {children}
    </>
  )
}

export default TabLayout;