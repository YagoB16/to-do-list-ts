import { CgAdd } from "react-icons/cg";
export function Button() {
    return (
        <button type="submit" className="bg-[#1E6F9F] text-[#F2F2F2] rounded-lg p-2  flex items-center gap-2">
            Criar
            <CgAdd
                size={20}
                />
        </button>
    )
}
