'use client';

type DialogAdminProps = {
  title: string;
  content: React.ReactNode;
  isVisible?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  disabled: boolean;
};

export function DialogAdmin({
  title,
  content,
  isVisible = false,
  onConfirm,
  onCancel,
  disabled = false,
}: DialogAdminProps) {
  if (!isVisible) return null;

  function handleCancel() {
    if (disabled) return;
    onCancel();
  }
  return (
    <div
      className='fixed z-50 bg-black/50 backdrop-blur-sm inset-0 flex items-center justify-center'
      onClick={handleCancel}
    >
      <div
        className='p-8 bg-slate-100 rounded-2xl max-w-2xl mx-6 flex flex-col gap-12 shadow-lg shadow-slate-800'
        role='dialog'
        aria-modal={true}
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'
        onClick={(e) => e.stopPropagation()}
      >
        <h3 id='dialog-title' className='text-3xl'>
          {title}
        </h3>
        <div id='dialog-description'>{content}</div>
        <div className='flex items-center justify-around gap-4'>
          <button
            className='rounded-[0.5rem] border-blue-700 border-2 bg-blue-700 px-12 py-4 min-w-40 text-slate-50 font-bold text-[1.15rem] hover:border-blue-800 hover:bg-blue-800 transition hover:cursor-pointer flex items-center justify-center disabled:bg-slate-400 disabled:border-slate-400 disabled:cursor-not-allowed'
            onClick={onConfirm}
            disabled={disabled}
          >
            Yes
          </button>
          <button
            className='rounded-[0.5rem] border-slate-800 border-2 px-12 py-4 min-w-40 font-bold text-[1.15rem] hover:bg-slate-200 transition hover:cursor-pointer flex items-center justify-center disabled:cursor-not-allowed disabled:border-slate-400 disabled:text-slate-400'
            autoFocus
            onClick={handleCancel}
            disabled={disabled}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
