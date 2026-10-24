type WorkspaceSectionProps = {
  children: React.ReactNode;
};

export function WorkspaceSection({ children }: WorkspaceSectionProps) {
  return <section>{children}</section>;
}
