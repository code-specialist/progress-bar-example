import { EventSourceMessage, fetchEventSource } from "@microsoft/fetch-event-source";
import { createContext, useCallback, useState } from "react"

interface IProgressContext {
    progress: number,
    startProcess(): void
}
interface IProps {
    children: React.ReactNode
}

interface IProgressState {
    count: number,
    maxCount: number
}

export const ProgressContext = createContext<IProgressContext>({
    progress: 0,
    startProcess: () => {}
});

const ProgressProvider: React.FC<IProps> = ({children}) => {
    const [progress, setProgress] = useState<number>(0);

    const startProcess = useCallback(() => {
        // url should be inside an environmental variable.
        fetchEventSource('http://localhost:8080/progress/progressbar', {
            onmessage(ev: EventSourceMessage){
                const progressState: IProgressState = JSON.parse(ev.data)
                setProgress(progressState.count / progressState.maxCount * 100)
                if(progressState.maxCount === progressState.count){
                    alert('Process was finished successfully')
                    setTimeout(() => {
                        setProgress(0)
                    }, 1500)
                }
            }
        })
    }, [])
    return <ProgressContext.Provider value={{ progress: progress, startProcess: startProcess }}>{children}</ProgressContext.Provider>
}

export default ProgressProvider;
