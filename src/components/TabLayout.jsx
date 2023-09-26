import Input from "./Input"
import DeleteBox from "./DeleteBox"

const TabLayout = ({ children, uid }) => {
  return (
    <>
      <Input uid={uid} />
      {children}
      <DeleteBox uid={uid} />
    </>
  )
}

export default TabLayout;