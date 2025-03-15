{
    description = "Inklings Note System";

    inputs = {
        flake-utils.url = "github:numtide/flake-utils";
    };

    outputs = { self, nixpkgs, flake-utils }:
        flake-utils.lib.eachDefaultSystem (system:
            let
                pkgs = nixpkgs.legacyPackages.${system};
                packages = with pkgs; [
                    postgresql.lib
                    pnpm
                    nodejs
                ];
            in
                {
                    devShell = pkgs.mkShell {
                        buildInputs = packages;
                        LD_LIBRARY_PATH = "${pkgs.lib.makeLibraryPath packages}:$LD_LIBRARY_PATH";
                    };
                    packages = {
                        default = packages;
                    };
                }
        );
}