import React from "react";

export default function Footer() {
  return (
    <div className="fixed bottom-0 w-full bg-white py-4 text-center border-t border-gray-300">
      <h3 className="max-w-[799px] mx-auto mb-[10px] text-gray-400 text-[13px]">
        This website is created as part of Hlsolutions program. The materials
        contained on this website are provided for general information only and
        do not constitute any form of advice. HLS assumes no responsibility for
        the accuracy of any particular statement and accepts no liability for
        any loss or damage which may arise from reliance on the information
        contained on this site.
      </h3>
      <h3 className="text-gray-700 text-[14px]">Copyright 2021 HLS</h3>
    </div>
  );
}
