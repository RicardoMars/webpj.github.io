const A="data:image/png;base64,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";export{A as default};
