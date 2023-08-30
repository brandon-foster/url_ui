const clipboardManager = (function createClipboardManager() {
    async function performFallbackCopy(str) {
        const textarea = document.createElement('textarea');
        textarea.value = str;
        document.body.append(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
    async function setText(str) {
        try {
            if (navigator.clipboard) {
                console.info('supports clipboard');
                await navigator.clipboard.writeText(str);
                return true;
            }
            else {
                console.info('does not support clipboard');
                await performFallbackCopy(str);
                return true;
            }
        }
        catch (error) {
            console.error(error);
        }
        return false;
    }
    return {
        setText: setText,
    };
}());

export default clipboardManager;