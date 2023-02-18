import DocViewer, {DocViewerRenderers} from "react-doc-viewer";

function DocV() {
    const docs = [
        {uri: require("./2023.docx")}, // Local File
    ];

    return <DocViewer pluginRenderers={DocViewerRenderers} documents={docs}/>;
}

export default DocV;