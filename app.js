const downloadButton = document.querySelector('#download-button');
const launchButton = document.querySelector('#launch-button');
const dialog = document.querySelector('#workspace-dialog');
const closeDialog = document.querySelector('#close-dialog');
const continueButton = document.querySelector('#continue-button');
const toast = document.querySelector('#toast');
let toastTimer;
function notify(message) { toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 3400); }
downloadButton.addEventListener('click', () => { const guide = ['Lattice Identity CLI', '', 'Mock quickstart', '1. Install the Identity CLI for your platform.', '2. Run: identity login', '3. Run: identity status', '', 'Replace this file with your release artifact when the CLI is available.'].join('\n'); const link = Object.assign(document.createElement('a'), { href: URL.createObjectURL(new Blob([guide], { type: 'text/plain' })), download: 'identity-cli-quickstart.txt' }); link.click(); URL.revokeObjectURL(link.href); notify('Identity CLI quickstart downloaded.'); });
launchButton.addEventListener('click', () => dialog.showModal());
closeDialog.addEventListener('click', () => dialog.close());
continueButton.addEventListener('click', () => { dialog.close(); notify('Workspace mock launched successfully.'); });
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
