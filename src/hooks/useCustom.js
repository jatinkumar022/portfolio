import { useState } from 'react'

const useCustom = () => {

  const [count, setCount] = useState(0);

  return { count, setCount };
};

export default useCustom
