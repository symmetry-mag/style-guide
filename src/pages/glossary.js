import useBaseUrl from '@docusaurus/useBaseUrl';

function toIndex() {
   React.useEffect(() => {
      window.location.href = useBaseUrl('/docs/index');
   }, []);
   return null;
}
