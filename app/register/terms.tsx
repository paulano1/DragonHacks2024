import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"


type TermsProps = {
    onAcceptTerms: (accepted: boolean) => void
}

export function Terms({onAcceptTerms}: TermsProps) {
    return(
        <Card className="w-[350px]">
        <CardHeader>
            Accept the terms to continue
        </CardHeader>
        <CardContent>
        You must be at least 18 years old and a currently-enrolled student (undergraduate or graduate) as of March 29, 2024, or have graduated within twelve months prior to March 29, 2024.
        <p>
        We take inclusivity and safety seriously, and as part of that goal, we uphold the community guidelines shared by all MLH Member Events.
             To attend, you must agree to abide by the terms of the  <a href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf' target="_blank" className="text-blue-500">MLH Code of Conduct</a>. 
             You must also agree to abide by the terms of the  MLH Contest Terms and Conditions.
              and the <a href='https://mlh.io/privacy' target="_blank" className="text-blue-500">MLH Privacy Policy</a>.
              Please note that you may receive pre and post-event informational e-mails and occasional messages about hackathons from MLH as per the MLH Privacy Policy.
            Since Dragon Hacks is hosted at Drexel University, the rules detailed in <a href='https://drexel.edu/studentlife/community-standards' target="_blank" className="text-blue-500">Drexel University{"'"}s Community Standards </a>
             take precedence for all things involving this hackathon.
        </p>
        </CardContent>
        <CardFooter className="flex justify-end space-x-4">
            <Button onClick={() => onAcceptTerms(true)}>Accept</Button>
            <Button onClick={() => onAcceptTerms(false)}>Decline</Button>
        </CardFooter>

        </Card>
    )
}