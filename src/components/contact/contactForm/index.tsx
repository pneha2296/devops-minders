import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import type { FormValues } from "../../../types";

export default function ContactForm() {
    const methods = useForm<FormValues>({
        mode: "onTouched",
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            company: "",
            service: "",
            budget: "",
            timeline: "",
            source: "",
            message: "",
        },
    });

    const [step, setStep] = useState<number>(1);

    const next = async () => {
        let isValid = false;

        if (step === 1) {
            isValid = await methods.trigger(["name", "email", "phone"]);
        } else if (step === 2) {
            isValid = await methods.trigger(["service", "budget", "message"]);
        }

        if (isValid) setStep((s) => s + 1);
    };

    const back = () => setStep((s) => s - 1);

    const onSubmit = (data: FormValues) => {
        console.log("Final Submit:", data);
    };

    return (
        <FormProvider {...methods}>
            <div className="bg-black py-16 px-4">
                <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                    className="max-w-5xl mx-auto bg-[#111] border border-white/10 rounded-2xl shadow-xl ext-white"
                >
                    {/* Progress bar */}
                    <div className="h-1 w-full bg-white/10 rounded mb-6 overflow-hidden">
                        <div
                            className="h-full bg-red-600 transition-all duration-300"
                            style={{
                                width: step === 1 ? "33%" : step === 2 ? "66%" : "100%",
                            }}
                        />
                    </div>
                    <div className="p-8">
                        {/* Steps */}
                        {step === 1 && <Step1 next={next} />}
                        {step === 2 && <Step2 next={next} back={back} />}
                        {step === 3 && <Step3 back={back} />}
                    </div>
                </form>
            </div>
        </FormProvider>
    );
}