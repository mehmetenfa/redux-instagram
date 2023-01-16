export default function Button() {
  return (
    <button
      type="submit"
      disabled={!isValid || !dirty || isSubmitting}
      className="h-[30px] mt-1 rounded bg-brand font-medium text-white text-sm disabled:opacity-50"
    >
      Log In
    </button>
  );
}
