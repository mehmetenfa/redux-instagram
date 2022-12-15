export default function Input([label, ...props]) {
  return (
    <label className="block relative">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required={true}
        className="bg-zinc-50 border px-2 rounded-sm outline-none text-xs focus:border-gray-400 w-full h-[38px] valid:pt-[10px] peer"
      />
      <small className="absolute top-1/2 left-[9px] cursor-text pointer-events-none text-xs text-gray-500 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">
        Phone Number, username or email
      </small>
    </label>
  );
}
