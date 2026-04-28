import { useFormContext } from "react-hook-form";
import type { FormValues } from "../../../types";
import Button from "../../ui/Button";

type Props = {
    back: () => void;
};

export default function Step3({ back }: Props) {
    const { getValues } = useFormContext<FormValues>();
    const data = getValues();

    return (
        <div>
            <h3 className="text-xl font-bold text-white mb-2">Step 3: Review & Submit</h3>
            <p className="text-sm text-gray-500">Provide details so we can best assist you.</p>
            <div className="bg-black border border-white/10 rounded-xl p-6 mb-6 text-sm mt-6">
                <p><span className="text-gray-400">Name:</span> {data.name}</p>
                <p><span className="text-gray-400">Email:</span> {data.email}</p>
                <p><span className="text-gray-400">Service:</span> {data.service}</p>
                <p><span className="text-gray-400">Budget:</span> {data.budget}</p>
                <p><span className="text-gray-400">Message:</span> {data.message}</p>
            </div>

            <button type="submit" className="bg-primary text-white px-6 py-2 rounded-lg w-full" >
                Submit Request
            </button>


            <div className="mt-4 flex justify-between pt-6 border-t border-white/10 mt-6 gap-4">
                <Button variant="secondary" onClick={back}>
                    Back
                </Button>
            </div>
        </div>
    );
}