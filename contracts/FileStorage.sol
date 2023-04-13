// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FileStorage {
    struct File {
        string name;
        uint256 size;
        string cid;
        string fileURL;
        string fileType;
    }

    mapping(address => File[]) ownerToFile;

    function addFile(
        string memory cid,
        string memory name,
        uint256 size,
        string memory fileURL,
        string memory fileType
    ) public {
        ownerToFile[msg.sender].push(File(name, size, cid, fileURL, fileType));
    }

    function deleteFile(string memory fileId) public {
        for (uint256 i = 0; i < ownerToFile[msg.sender].length; i++) {
            if (
                keccak256(bytes(ownerToFile[msg.sender][i].cid)) ==
                keccak256(bytes(fileId))
            ) {
                ownerToFile[msg.sender][i] = ownerToFile[msg.sender][
                    ownerToFile[msg.sender].length - 1
                ];
                ownerToFile[msg.sender].pop();
                break;
            }
        }
    }

    function getAllFilesOfUser() public view returns (File[] memory) {
        return ownerToFile[msg.sender];
    }
}
