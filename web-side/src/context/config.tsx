import { Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'
import { ExamplesTypes } from '../@types/vehice'
import { useNuiEvent } from '../hooks/useNuiEvent'
import React from 'react'

interface ExamplesContextProps {
     examples?: ExamplesTypes[] | []
     setExamples: Dispatch<SetStateAction<ExamplesTypes[]>>
}

const Examples = React.createContext<ExamplesContextProps>({
     examples: [],
     setExamples: () => { }
})

interface ExamplesProps {
     children: ReactNode
}

export default function ExamplesProvider({ children }: ExamplesProps) {
     const [examples, setExamples] = useState<ExamplesTypes[]>([])

     useNuiEvent("config", setExamples)
     return (
          <Examples.Provider value={{ examples, setExamples }}>
               {children}
          </Examples.Provider>
     )
}

export const useConfig = () => useContext(Examples)