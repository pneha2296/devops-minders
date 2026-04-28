import { useFormContext } from "react-hook-form";
import type { FormValues } from "../../../types";
import SelectField from "../../ui/SelectField";
import TextAreaField from "../../ui/TextAreaField";
import Button from "../../ui/Button";

type Props = {
    next: () => void;
    back: () => void;
};

export default function Step2({ next, back }: Props) {
    const {
        register,
        formState: { errors },
    } = useFormContext<FormValues>();

    return (
        <div>
            <h3 className="text-xl font-bold text-white mb-2">Step 2: Project Details</h3>
            <p className="text-sm text-gray-500">Provide details so we can best assist you.</p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
                <SelectField
                    label="Service Needed"
                    options={[
                        "Cloud Migration",
                        "CI/CD Setup",
                        "Kubernetes",
                        "laC",
                        "DevSecOps",
                        "Monitoring",
                        "Other",
                    ]}
                    register={register("service", { required: "Required" })}
                    error={errors.service}
                />

                <SelectField
                    label="Project Budget"
                    options={[
                        "<$1K",
                        "$1K-$5K",
                        "$5K-$10K",
                        "$10K+",
                    ]}
                    register={register("budget", { required: "Required" })}
                    error={errors.budget}
                />

                <SelectField
                    label="Timeline"
                    options={[
                        "ASAP",
                        "1 Month",
                        "3 Months",
                        "Flexible",
                    ]}
                    register={register("timeline")}
                />

                <SelectField
                    label="How did you hear?"
                    options={[
                        "Search Engine",
                        "LinkedIn",
                        "Referral",
                        "Other",
                    ]}
                    register={register("source")}
                />
            </div>

            <div className="mt-6">
                <TextAreaField
                    placeholder="Tell us about the challenges you're facing..."
                    label="Describe Your Problem"
                    register={register("message", { required: "Please describe your problem (min 10 characters)." })}
                    error={errors.message}
                />
            </div>

            <div className="mt-4 flex justify-between pt-6 border-t border-white/10 mt-6 gap-4">
                <Button variant="secondary" onClick={back}>
                    Back
                </Button>

                <Button onClick={next}>Next</Button>
            </div>
        </div>
    );
}