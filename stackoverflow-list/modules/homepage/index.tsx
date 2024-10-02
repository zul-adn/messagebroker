'use client'
import { useEffect } from "react";
import { useTags } from "./hooks/useTags"
import { ListItem as ListItemTags} from "./components/tags/listItem";
import { ListItem as ListItemQuestions} from "./components/questions/listItem";
import { useQuestions } from "./hooks/useQuestions";
import { SeacrhBar } from "./components/seacrh-bar";

export const HomePage = () => {
    const tags = useTags();
    const questions = useQuestions();

    useEffect(() => {
        questions.getQuestion()
    }, [])
    
    return (
        <div className="w-3/4 items-center">
            <SeacrhBar />
            <div className="pt-4">
                <ListItemTags tags={tags.data} loading={tags.loading}/>
                <ListItemQuestions questions={questions.data} cb={questions.getQuestion} loading={questions.loading}/>
            </div>
        </div>
    )
}

