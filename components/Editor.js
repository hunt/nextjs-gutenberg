import { Fragment, useEffect } from "react";

/**
 * WordPress dependencies
 */
import {
  Popover,
  SlotFillProvider,
  DropZoneProvider,
  FocusReturnProvider
} from "@wordpress/components";

import { InterfaceSkeleton, FullscreenMode } from "@wordpress/interface";

/**
 * Internal dependencies
 */

import Notices from "components/notices";
import Sidebar from "components/sidebar";
import BlockEditor from "components/block-editor";

import { registerCoreBlocks } from "@wordpress/block-library";

function Editor({ settings }) {
  useEffect(() => registerCoreBlocks(), []);

  return (
    <Fragment>
      <FullscreenMode isActive={false} />
      <SlotFillProvider>
        <DropZoneProvider>
          <FocusReturnProvider>
            <InterfaceSkeleton
              header={() => <div>Header</div>}
              sidebar={<Sidebar />}
              content={
                <Fragment>
                  <Notices />
                  <BlockEditor settings={settings} />
                </Fragment>
              }
            />

            <Popover.Slot />
          </FocusReturnProvider>
        </DropZoneProvider>
      </SlotFillProvider>
    </Fragment>
  );
}

export default Editor;
